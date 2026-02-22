import {Department,BannerImage} from"@/lib/generated/prisma"

export interface ServerActionResponse<T=any>{
    success: boolean;
    message?:string;
    data?:T
    error?:string;
    errorType?:string;
}

export interface DepartmentData extends Department{}

export interface DoctorData {
    id:string;
    name:string;
    speciality:string;
    rating:number;
    reviewCount:number;
    imageUrl:string;
}

export interface DoctorReview{
    id:string;
    name:string;
    date:string;
    rating:number;
    testimonial:string;
    imageSrc:string;
}

export interface BannerData extends BannerImage{}


export interface DoctorProfileData{
    id:string;
    credentials:string;
    name:string;
    specialization:string[];
    speciality:string;
    rating:number;
    reviewCount:number;
    imageUrl:string;
    languages:string[]; 
    breif:string;   
}