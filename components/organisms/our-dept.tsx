//import { departmentData } from "@/app/db/dummydb";
import {getDepartments} from "@/lib/actions/settings.action";
import {DepartmentData} from "@/types";
import DepartmentCard from "@/components/molecules/departmentcard";
 
// interface DepartmentData {
//   id: string;
//   name: string;
//   iconName: string;
// }

export default async function DepartmentsSection() {
  // const departments:DepartmentData[] = departmentData;
  let departments:DepartmentData[]=[];
  let fetchError:string| null=null;
  try{
    const response=await getDepartments();
    if(response.success && response.data){
      departments=response.data.departments;
    }else{
      fetchError=response.message|| "Failed to fetch departments";
    }
  }catch(error){
    fetchError="Failed to fetch departments";
  }
  return (
    <section className="w-full py-4">
      
        <h2 className="text-center text-text-title mb-8">
          Our Departments
        </h2>
        {fetchError?(
           <p className="text-center text-red-500">
          {fetchError}
        </p>
      ) : departments.length === 0 ? (
        <p className="text-center text-gray-500">
          No departments available.
        </p>
        ):(
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