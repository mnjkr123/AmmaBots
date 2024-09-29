type DownloadFile = {
    data: Blob | ArrayBuffer | string; // Specify a more appropriate type for data
    filename: string;
    mime: string; // Specify the MIME type as a string
    bom?: BlobPart; // BOM can be optional; use BlobPart for better typing
};

const downloadFile = ({ data, filename, mime, bom }: DownloadFile) => {
    // Create an array of BlobParts
    const blobData: BlobPart[] = bom ? [bom, data] : [data]; // Ensure blobData is of type BlobPart[]

    const blob = new Blob(blobData, { type: mime || 'application/octet-stream' });

    const blobURL = window.URL.createObjectURL(blob); // Use const for blobURL
    const tempLink = document.createElement('a'); // Use const for tempLink
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
    }

    document.body.appendChild(tempLink);
    tempLink.click();

    // Fixes "webkit blob resource error 1"
    setTimeout(() => {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
    }, 200);
};

export { downloadFile };
