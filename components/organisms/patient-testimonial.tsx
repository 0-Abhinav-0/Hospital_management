import { testimonialData } from "@/app/db/dummydb";
import ReviewCard from "@/components/molecules/review"; // Assuming you saved your Review component as ReviewCard.tsx

interface TestimonialData{
    id: string;
    patientName: string;
    reviewDate: string;
    rating: number;
    testimonialText: string;
    patientImage?: string;
}
 
export default function PatientTestimonials() {
  const testimonials:TestimonialData[] = testimonialData;
  return (
    <section className="w-full ">
      
        <h2 className=" text-center text-text-title mb-8 ">
          Patient Testimonials
        </h2>
        {testimonialData.length===0 ? (<p className="text-center py-4 text-grey-500"> No testimonials found</p>):(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.patientName}
              date={testimonial.reviewDate}
              rating={testimonial.rating}
              testimonial={testimonial.testimonialText}
              imageSrc={testimonial.patientImage || ""}
            />
          ))}
        </div>
        )}
    </section>
  );
}