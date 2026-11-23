interface IDownloadButton {
    fileId: string;
}

function DownloadButton({ fileId }: IDownloadButton) {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    return (
        <a
            href={downloadUrl}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
            Download
        </a>
    );
}

export default DownloadButton;
