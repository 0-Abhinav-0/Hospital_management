import DepartmentCard from "@/components/molecules/departmentcard";
import DoctorCard from "@/components/molecules/doctorcard";
import Review from "@/components/molecules/review";
import OurDoctors from "@/components/organisms/our-doctor";

export default function AppointmentsPage() {
    return (
        <div className="flex flex-col justify-center items-center">

            <div className="width-[175px]">
                <DepartmentCard name="Cardiology" iconName="Heart" id="1" />
            </div>
            <br />
            <br />
            <DoctorCard id="1" name="Dr. John Doe" specialty="Cardiologist" rating={4.5} reviewCount={100} imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww" />
            <br />
            <br />
            
            <Review id="1" name="John Doe" rating={4.5} testimonial="Great doctor!" date="2022-01-01" imageSrc="https://images.unsplash.com/photo-1769226146862-6f0b1dcaddd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" />
            
            <br/>
            <br/>

            <OurDoctors/>
        
        </div>
    );

}
