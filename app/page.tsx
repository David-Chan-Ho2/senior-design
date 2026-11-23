import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Download, Droplet, FileText, Flag, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Resource {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    label: string;
    external?: boolean;
}

const driveDownload = (id: string) =>
    `https://drive.google.com/uc?export=download&id=${id}`;

const resources: Resource[] = [
    {
        title: "Startup Manual",
        description:
            "Set up the environment and get everything running before the exercise begins.",
        icon: Rocket,
        href: driveDownload("1zRWuAzncEhS14tSJrWHpI1mIo2Ab2iUj"),
        label: "Download PDF",
    },
    {
        title: "Exercise Manual",
        description:
            "Step-by-step guide to the capture-the-flag exercise and its challenges.",
        icon: FileText,
        href: driveDownload("193VcYwkDgxb96cwWNRaanHHFNlAtmDRJ"),
        label: "Download PDF",
    },
    {
        title: "Case Study",
        description:
            "The 2021 Oldsmar, Florida water treatment plant intrusion, a real-world OT attack.",
        icon: Droplet,
        href: "https://www.cnn.com/2021/02/10/us/florida-water-poison-cyber",
        label: "Read article",
        external: true,
    },
];

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-muted/40">
            <header className="border-b bg-background/80 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Flag className="size-5" aria-hidden />
                    </div>
                    <span className="font-semibold tracking-tight">EPRI Flag</span>
                </div>
            </header>

            <main className="flex-1">
                <section className="relative overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] from-primary/15 to-transparent to-70%"
                    />
                    <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            University of North Carolina at Charlotte · Senior Design
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                            EPRI Flag
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                            A cybersecurity training program for operational
                            technology professionals. Download the manuals below
                            to get set up and run the exercise.
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-5xl px-6 pb-24">
                    <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        Resources
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {resources.map(
                            ({ title, description, icon: Icon, href, label, external }) => (
                                <Card
                                    key={title}
                                    className="[--card-spacing:--spacing(6)] transition-shadow hover:shadow-md"
                                >
                                    <CardHeader>
                                        <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                                        </div>
                                        <CardTitle className="text-lg font-semibold">
                                            {title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <CardDescription className="leading-6">
                                            {description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="border-t-0 bg-transparent pt-0">
                                        <Button
                                            size="lg"
                                            variant={external ? "outline" : "default"}
                                            nativeButton={false}
                                            render={
                                                <a
                                                    href={href}
                                                    {...(external && {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                    })}
                                                />
                                            }
                                        >
                                            {external ? null : <Download aria-hidden />}
                                            {label}
                                            {external ? <ArrowUpRight aria-hidden /> : null}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        )}
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-muted-foreground">
                    University of North Carolina at Charlotte · Senior Design Project
                </div>
            </footer>
        </div>
    );
}
