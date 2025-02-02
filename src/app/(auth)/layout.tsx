import { Button } from "@/components/ui/button";
import Image from "next/image";

type AuthLayoutProps = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="min-h-screen bg-neutral-100">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex items-center justify-between">
                    <Image src="/logo.svg" alt="logo" width={152} height={56} />
                    <Button variant="secondary">Sign Up</Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">{children}</div>
            </div>
        </main>
    );
};

export default AuthLayout;
