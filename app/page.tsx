import DepartmentsSection from "@/components/organisms/our-dept";
import OurDoctors from "@/components/organisms/our-doctor";
import PatientTestimonials from "@/components/organisms/patient-testimonial";
import HomeBanner from "@/components/organisms/home-banner";
 
export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <div className="flex flex-col p-8 max-w-7xl mx-auto w-full gap-16">
        <div>
          <p className="mt-4 mb-12 body-regular text-text-body-subtle max-w-3xl mx-auto text-center">
            Welcome to Highland Medical Center, your premier destination for
            specialized healthcare consultation. Our facility brings together
            exceptional physicians across all major medical departments,
            offering expert diagnosis and personalized treatment planning in one
            convenient location.
          </p>
          <DepartmentsSection />
        </div>
        <div id="our-doctors">
          <OurDoctors />
        </div>
        <PatientTestimonials />
      </div>
    </div>
  );
}