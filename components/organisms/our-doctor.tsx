import { doctorData } from "@/app/db/dummydb";
import DoctorCard from "@/components/molecules/doctorcard";

interface DoctorData {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export default function OurDoctors() {
  const doctors:DoctorData[] = doctorData;
  return (
    <section className="w-full py-4  ">
     
        <h2 className="text-text-title text-center text-gray-800 mb-8 ">
          Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              rating={doctor.rating}
              reviewCount={doctor.reviewCount}
              imageUrl={doctor.imageUrl}
            />
          ))}
        </div>
      
    </section>
  );
}