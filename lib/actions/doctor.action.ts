"use server";

import { prisma } from "@/app/db/prisma";
import { Role } from "@/lib/generated/prisma";
import { ServerActionResponse, DoctorData, DoctorProfileData } from "@/types";

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
        doctorProfile: {
          select: {
            specialty: true,
            rating: true,
            reviewCount: true,
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Map DB fields to DoctorData structure
    const formattedDoctors: DoctorData[] = doctors.map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      speciality: doctor.doctorProfile?.specialty || "General", // fallback if null
      rating: doctor.doctorProfile?.rating || 0,
      reviewCount: doctor.doctorProfile?.reviewCount || 0,
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


export async function getDoctorDetails(
  doctorId: string
): Promise<ServerActionResponse<DoctorProfileData>> {
  try {
    if (!doctorId) {
      return {
        success: false,
        error: "Doctor ID is required",

      };
    }

    const doctor = await prisma.doctorProfile.findUnique({
      where: {
        userId: doctorId,
      },
      include: {
        doctor: true, // this joins User table
      },
    });

    if (!doctor || !doctor.doctor) {
      return {
        success: false,
        message: "Doctor not found",
        errorType: "NOT_FOUND"
      };
    }

    const doctorData: DoctorProfileData = {
      id: doctor.doctor.id,
      credentials: doctor.credentials,
      name: doctor.doctor.name,
      specialization: doctor.specializations,
      speciality: doctor.specialty, // note spelling in your interface
      rating: doctor.rating,
      reviewCount: doctor.reviewCount,
      imageUrl: doctor.doctor.image ?? "",
      languages: doctor.languages,
      breif: doctor.brief, // note spelling in your interface
    };

    return {
      success: true,
      data: doctorData,
    };
  } catch (error) {
    console.error("Error fetching doctor details:", error);

    return {
      success: false,
      message: "Something went wrong while fetching doctor details",
      error: error instanceof Error ? error.message : "Unknwon error",
      errorType: "SERVER_ERROR",
    };
  }
}