import ReviewCard from "@/components/molecules/review";
import { getTopTestimonials } from "@/lib/actions/review.action";
import { DoctorReview } from "@/types";

export default async function PatientTestimonials() {
  let testimonials: DoctorReview[] = [];
  let fetchError: string | null = null;

  try {
    const response = await getTopTestimonials();

    if (response.success && response.data) {
      testimonials = response.data;
    } else {
      fetchError =
        response.message || "Failed to fetch testimonials.";
    }
  } catch (error) {
    fetchError =
      "Something went wrong while fetching testimonials.";
  }

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">
        Patient Testimonials
      </h2>

      {fetchError ? (
        <p className="text-center py-4 text-red-500">
          {fetchError}
        </p>
      ) : testimonials.length === 0 ? (
        <p className="text-center py-4 text-gray-500">
          No reviews found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              date={testimonial.date}
              rating={testimonial.rating!}
              testimonial={testimonial.testimonial}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      )}
    </section>
  );
}
