import { departmentData } from "@/app/db/dummydb";
import DepartmentCard from "@/components/molecules/departmentcard";
 
interface DepartmentData {
  id: string;
  name: string;
  iconName: string;
}

export default function DepartmentsSection() {
  const departments:DepartmentData[] = departmentData;
  return (
    <section className="w-full py-4">
      
        <h2 className="text-center text-text-title mb-8">
          Our Departments
        </h2>
        {departmentData.length===0 ? (<p className="text-center py-4 text-grey-500"> No departments found</p>):(
        <div className="grid grid-cols-1 md:grid-cols md:grid-cols-[repeat(auto-fit,minmax(176px,1fr))] gap-6 md:gap-8 justify-center">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
              name={department.name}
              iconName={department.iconName}
            />
          ))}
        </div>
        )}
  
    </section>
  );
}