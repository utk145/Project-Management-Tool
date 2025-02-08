import { DottedSeparator } from "@/components/custom/dotted-separator";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


/**
 * SignInCard Component
 *
 * @returns {*}
 */
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
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        required={true}
                        type="email"
                        placeholder="Please enter your email address"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                    />
                    <Input
                        required={true}
                        type="password"
                        placeholder="Please enter your password"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                        min={8}
                        max={256}
                    />
                    <Button
                        variant="primary"
                        className="w-full"
                        size={"lg"}
                        disabled={false}
                    >
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="flex flex-col gap-y-4 p-7">
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FcGoogle className="mr-2 size-5" />
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FaGithub className="mr-2 size-5" />
                    Login with GitHub
                </Button>
            </CardContent>
        </Card>
    );
};
