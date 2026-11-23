import DownloadButton from "./components/DownloadButton";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        University of North Carolina
                    </h1>
                    <h2>Senior Capstone EPRI Flag</h2>
                    <p>Exercise Manual</p>
                    <DownloadButton fileId="193VcYwkDgxb96cwWNRaanHHFNlAtmDRJ" />
                    <p>Startup Manual</p>
                    <DownloadButton fileId="1zRWuAzncEhS14tSJrWHpI1mIo2Ab2iUj" />
                </div>
            </main>
        </div>
    );
}
