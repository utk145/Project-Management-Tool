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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { signInSchema } from "@/server/api/models/auth.schema";
import { useLogin } from "../usages/use-login";

/**
 * SignInCard Component
 *
 * @returns {*}
 */
export const SignInCard = () => {
    // Initialize the form using react-hook-form and zodResolver for validation.
    const form = useForm<z.infer<typeof signInSchema>>({
        mode: "onChange", // Validate form on every change.
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(signInSchema), // Integrate Zod validation.
    });

    const { mutate: login } = useLogin();

    const onSubmitSignIn = (data: z.infer<typeof signInSchema>) => {
        console.log(data);
        login({ json: data });
    };

    return (
        <Card className="h-full w-full border-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-[487px]">
            <CardHeader className="flex items-center justify-center p-8 text-center">
                <CardTitle className="text-3xl font-bold text-primary">
                    Sign In
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                    Welcome back! Please log in to continue.
                </CardDescription>
            </CardHeader>
            {/* Custom Separator */}
            <div className="mb-4 px-8">
                <DottedSeparator />
            </div>
            <CardContent className="p-8">
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmitSignIn)}
                    >
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => {
                                return (
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
                                );
                            }}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="Please enter your password address"
                                                className="rounded-lg border-muted-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/50"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <Button
                            variant="primary"
                            className={cn(
                                "w-full rounded-lg py-3 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-primary/40",
                            )}
                            size={"lg"}
                            disabled={false}
                        >
                            Login
                        </Button>
                    </form>
                </Form>
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
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"outline"}
                    size={"lg"}
                    className="w-full rounded-lg border-muted-foreground/30 py-3 text-lg font-semibold shadow-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                    <FaGithub className="mr-3 size-6" />
                    Login with GitHub
                </Button>
            </CardContent>
            <div className="px-8">
                <DottedSeparator />
            </div>
            <CardContent className="flex items-center justify-center p-7">
                <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/sign-up"
                        className="text-blue-700 text-primary hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};
