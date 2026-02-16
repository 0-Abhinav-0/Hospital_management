"use server";

import "dotenv/config"; // Only needed if running outside Next runtime (safe but usually unnecessary)

import { prisma } from "@/app/db/prisma";
import { ServerActionResponse, DoctorReview } from "@/types";
import { formatInTimeZone } from "date-fns-tz";
import {getAppTimeZone} from "../timeconfig";

export async function getTopTestimonials(): Promise<
  ServerActionResponse<DoctorReview[]>
> {
  try {
    const timezone=getAppTimeZone();
    const testimonials = await prisma.doctorTestimonial.findMany({
      include: {
        patient: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: [
        {
          createdAt: "desc", // latest first
        },
        {
            rating:"desc"
        },
      ],
      take: 3, // 🔥 only top 5
    });

    const formatted: DoctorReview[] = testimonials.map((item) => ({
      id: item.testimonialId,
      name: item.patient.name,
      date: formatInTimeZone(
        item.createdAt,
        timezone,
        "dd MMM yyyy"
      ),
      rating: item.rating ?? 0,
      testimonial: item.testimonialText,
      imageSrc: item.patient.image ?? "/default-user.png",
    }));

    return {
      success: true,
      data: formatted,
      message: "Top testimonials fetched successfully",
    };
  } catch (error: any) {
    console.error("Error fetching testimonials:", error);

    return {
      success: false,
      message: "Failed to fetch testimonials",
      error: error?.message || "Unknown error",
      errorType: "DATABASE_ERROR",
    };
  }
}
