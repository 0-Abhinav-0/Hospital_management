import { getDoctorDetails } from "@/lib/actions/doctor.action";
import { notFound } from "next/navigation";
import DoctorProfileTopCard from "@/components/organisms/Doctor-Profile/doctorprofile_topcard";
import DoctorProfileAbout from "@/components/organisms/Doctor-Profile/about";

interface Params {
  doctorId: string;
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const doctorIdObject = await params;
  const { doctorId } = doctorIdObject;

  let doctorActionResponse;

  try {
    doctorActionResponse = await getDoctorDetails(doctorId);
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    return (
      <div className="p-6 text-center text-alert-1">
        <p className="body-small-bold">
          We&apos;re sorry, something went wrong while loading the doctor&apos;s profile.
        </p>
        <p className="body-regular">
          Please try refreshing the page or check back later.
        </p>
      </div>
    );
  }

  if (!doctorActionResponse.success) {
    if (doctorActionResponse.errorType === "NOT_FOUND") {
      notFound();
    }

    console.error(
      `Failed to fetch doctor details for ${doctorId}`,
      doctorActionResponse.message,
      doctorActionResponse.error
    );

    return (
      <div className="p-6 text-center text-alert-1">
        <p className="body-small-bold">
          Could not load doctor profile.
        </p>
        <p className="body-regular">
          Please try again later.
        </p>
      </div>
    );
  }

  const doctor = doctorActionResponse.data;

  if (!doctor) {
    notFound();
  }

  return (
    <div className="w-full bg-background-1">
      <div className="max-w-[1376px] mx-auto flex flex-col md:flex-row gap-8 p-6 md:p-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 md:gap-8 md:max-w-[908px] md:flex-1">
          <DoctorProfileTopCard
            id={doctor.id}
            name={doctor.name}
            credentials={doctor.credentials}
            speciality={doctor.speciality}
            languages={doctor.languages}
            specialization={doctor.specialization}
            rating={doctor.rating}
            reviewCount={doctor.reviewCount}
            imageUrl={doctor.imageUrl}
            breif={doctor.breif}
          />

          <div className="md:hidden">
            AppointmentScheduler
          </div>

          <DoctorProfileAbout name={doctor.name} breif={doctor.breif} />

          <div >
            PatientReviews
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block w-[360px]">
          AppointmentScheduler
        </div>

      </div>
    </div>
  );
}