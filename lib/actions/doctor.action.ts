"use server";

import { prisma } from "@/app/db/prisma";
import { Role } from "@/lib/generated/prisma";
import { ServerActionResponse, DoctorData } from "@/types";

export async function getOurDoctors(): Promise<
  ServerActionResponse<DoctorData[]>
> {
  try {
    const doctors = await prisma.user.findMany({
      where: {
        role: Role.DOCTOR, // important
      },
      select: {
        id: true,
        name: true,
        image: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Map DB fields to DoctorData structure
    const formattedDoctors: DoctorData[] = doctors.map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      speciality: "General", // default since DB doesn't have it
      rating: 0, // default value
      reviewCount: 0, // default value
      imageUrl: doctor.image ?? "/default-doctor.png",
    }));

    return {
      success: true,
      data: formattedDoctors,
      message: "Doctors fetched successfully",
    };
  } catch (error: any) {
    console.error("Error fetching doctors:", error);

    return {
      success: false,
      message: "Failed to fetch doctors",
      error: error?.message || "Unknown error",
      errorType: "DATABASE_ERROR",
    };
  }
}
