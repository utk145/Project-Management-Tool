// Internal imports
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
import { cn } from "@/lib/utils";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/server/api/models/auth.schema";
import { useSignUp } from "../usages/use-signup";

// External Libraries
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * SignUpCard Component
 *
 * @returns {JSX.Element} The SignUpCard component.
 */
export const SignUpCard = () => {
    // Initialize the form using react-hook-form and zodResolver for validation.
    const form = useForm<z.infer<typeof signUpSchema>>({
        mode: "onChange", // Validate form on every change.
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        resolver: zodResolver(signUpSchema), // Integrate Zod validation.
    });

    const { mutate: signUp } = useSignUp();

    const onSubmitSignUp = (data: z.infer<typeof signUpSchema>) => {
        console.log(data); // IMPORTANT: Remove this line
        signUp({ json: data });
    };

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

            {/* Sign-Up Form */}
            <CardContent className="p-8">
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmitSignUp)}
                    >
                        {/* Name Input */}
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your name"
                                            className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email Input */}
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Please enter your email address"
                                            className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Input */}
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Please enter your password"
                                            className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Sign Up Button */}
                        <Button
                            variant="primary"
                            className={cn(
                                "w-full rounded-lg py-3 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-primary/40",
                            )}
                            size={"lg"}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>

            {/* Custom Separator */}
            <div className="px-8">
                <DottedSeparator />
            </div>

            {/* Social Sign-Up Buttons */}
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
            <div className="px-8">
                <DottedSeparator />
            </div>
            <CardContent className="flex items-center justify-center p-7">
                <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="text-blue-700 text-primary hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};
