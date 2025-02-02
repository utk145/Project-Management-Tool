import { DottedSeparator } from "@/components/custom/dotted-separator";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const SignInCard = () => {
    return (
        <Card className="h-full w-full border-none shadow-none md:w-[487px]">
            <CardHeader className="flex items-center justify-center p-7 text-center">
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>Welcome back!</CardDescription>
            </CardHeader>
            {/* Custom Separator */}
            <div className="mb-2 px-7">
                <DottedSeparator />
            </div>
        </Card>
    );
};
