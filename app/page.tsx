import type { ReactNode } from "react";
import DownloadButton from "./components/DownloadButton";

function Card({
    icon,
    title,
    description,
    children,
}: {
    icon: ReactNode;
    title: string;
    description: string;
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
            </p>
            <div className="mt-6">{children}</div>
        </div>
    );
}

const iconProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
};

export default function Home() {
    return (
        <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
            <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <svg {...iconProps} className="h-5 w-5">
                            <path d="M4 22V4" />
                            <path d="M4 4h13l-2 4 2 4H4" />
                        </svg>
                    </div>
                    <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                        EPRI Flag
                    </span>
                </div>
            </header>

            <main className="flex-1">
                <section className="relative overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] from-blue-100 to-transparent to-70% dark:from-blue-950/60"
                    />
                    <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                            University of North Carolina · Senior Design
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
                            EPRI Flag
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            A cybersecurity training program for operational
                            technology professionals. Download the manuals
                            below to get set up and run the exercise.
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-5xl px-6 pb-24">
                    <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Resources
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card
                            title="Startup Manual"
                            description="Set up the environment and get everything running before the exercise begins."
                            icon={
                                <svg {...iconProps}>
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                            }
                        >
                            <DownloadButton fileId="1zRWuAzncEhS14tSJrWHpI1mIo2Ab2iUj" />
                        </Card>

                        <Card
                            title="Exercise Manual"
                            description="Step-by-step guide to the capture-the-flag exercise and its challenges."
                            icon={
                                <svg {...iconProps}>
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M8 13h8" />
                                    <path d="M8 17h5" />
                                </svg>
                            }
                        >
                            <DownloadButton fileId="193VcYwkDgxb96cwWNRaanHHFNlAtmDRJ" />
                        </Card>

                        <Card
                            title="Case Study"
                            description="The 2021 Oldsmar, Florida water treatment plant intrusion, a real-world OT attack."
                            icon={
                                <svg {...iconProps}>
                                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                                </svg>
                            }
                        >
                            <a
                                href="https://www.cnn.com/2021/02/10/us/florida-water-poison-cyber"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                            >
                                Read article
                                <svg {...iconProps} className="h-4 w-4">
                                    <path d="M7 17 17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </a>
                        </Card>
                    </div>
                </section>
            </main>

            <footer className="border-t border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400">
                    University of North Carolina · Senior Design Project
                </div>
            </footer>
        </div>
    );
}
