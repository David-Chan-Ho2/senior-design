interface IDownloadButton {
  href: string;
  download: string;
  name: string;
}

function DownloadButton({ href, download, name }: IDownloadButton) {
  return (
    <a
      href={href}
      download={download}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block"
    >
      {name}
    </a>
  );
}

export default DownloadButton;
