

// // interface DoctorData {
// //   id: string;
// //   name: string;
// //   specialty: string;
// //   rating: number;
// //   reviewCount: number;
// //   imageUrl: string;
// // }



import DoctorCard from "@/components/molecules/doctorcard";
import { getOurDoctors } from "@/lib/actions/doctor.action";
import { DoctorData } from "@/types";

export default async function OurDoctors() {
  let doctors: DoctorData[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getOurDoctors();

    if (response.success && response.data) {
      doctors = response.data;
    } else {
      fetchError = response.message || "Failed to load doctors.";
    }
  } catch (error) {
    fetchError = "Something went wrong while fetching doctors.";
  }

  return (
    <section className="w-full py-4">
      <h2 className="text-text-title text-center mb-8">
        Our Doctors
      </h2>

      {fetchError ? (
        <p className="text-center text-red-500">
          {fetchError}
        </p>
      ) : doctors.length === 0 ? (
        <p className="text-center text-gray-500">
          No doctors available.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialty={doctor.speciality}
              rating={doctor.rating}
              reviewCount={doctor.reviewCount}
              imageUrl={doctor.imageUrl}
            />
          ))}
        </div>
      )}
    </section>
  );
}
