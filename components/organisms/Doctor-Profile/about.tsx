import { Card, CardContent } from "@/components/ui/card";

interface doctorProfileAboutProps {
    name: string;
    breif: string;
}
export default function DoctorProfileAbout({ name, breif }: doctorProfileAboutProps) {

    return (
        <Card className="w-full p-4  bg-background overflow-hidden border-0 shadow-small rounded-lg md:p-6 ">
            <CardContent className="p-0">
                <h2 className="text-text-title body-semibold mb-[14px]">About {name}</h2>
                <p className="body-regular text-text-body-subtle">{breif}</p>
            </CardContent>
        </Card>
    )
}