// Internal Modules
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div className="">
            <Button variant={"primary"}>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="muted">Muted</Button>
            <Button variant="territory">Territory</Button>
            <Input type="text" placeholder="Type here" />
        </div>
    );
}
