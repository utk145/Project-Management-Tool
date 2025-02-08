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
 * Sign up card component
 *
 * @returns {*}
 */
export const SignUpCard = () => {
    return (
        <Card className="h-full w-full border-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-[487px]">
            <CardHeader className="flex items-center justify-center p-8 text-center">
                <CardTitle className="text-3xl font-bold text-primary">
                    Sign Up
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                    Create your account to get started.
                </CardDescription>
            </CardHeader>
            {/* Custom Separator */}
            <div className="mb-4 px-8">
                <DottedSeparator />
            </div>
            <CardContent className="p-8">
                <form className="space-y-6">
                    <Input
                        required={true}
                        type="text"
                        placeholder="Enter your name"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                        className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                    <Input
                        required={true}
                        type="email"
                        placeholder="Please enter your email address"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                        className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
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
                        className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                    />
                    <Button
                        variant="primary"
                        className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/90 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:from-primary/90 hover:to-primary hover:shadow-primary/40"
                        size={"lg"}
                        disabled={false}
                    >
                        Sign Up
                    </Button>
                </form>
            </CardContent>
            <div className="px-8">
                <DottedSeparator />
            </div>
            <CardContent className="flex flex-col gap-y-4 p-8">
                <Button
                    disabled={false}
                    variant={"outline"}
                    size={"lg"}
                    className="w-full rounded-lg border-muted-foreground/30 py-3 text-lg font-semibold shadow-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                    <FcGoogle className="mr-3 size-6" />
                    Sign up with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"outline"}
                    size={"lg"}
                    className="w-full rounded-lg border-muted-foreground/30 py-3 text-lg font-semibold shadow-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                    <FaGithub className="mr-3 size-6" />
                    Sign up with GitHub
                </Button>
            </CardContent>
        </Card>
    );
};
