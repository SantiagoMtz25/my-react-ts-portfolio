import React from 'react';
import '../components/css_files/DownloadCV.css';

const DownloadCV = () => {

  const handleDownload = () => {
    /* Creating a link element programmatically is a common and effective 
      way to trigger downloads without needing to include a static link in
      your component's JSX. This method is particularly useful when the URL 
      of the downloadable file is not known ahead of time or if you need to 
      perform some operations before initiating the download (e.g., generating 
      a file on the fly or fetching a URL from an API). */    

    // Create a new anchor element
    const link = document.createElement('a');
    // Set the path of the link to the PDF file you want to download
    // If the file is located in the public folder, the path might look like '/files/myResume.pdf'
    // If it's an online resource, use the full URL, e.g., 'https://example.com/myResume.pdf'
    link.href = '../Resume Santiago Martinez Vallejo.pdf'; // Adjust the path accordingly
    // Set the download attribute of the link. This can be the filename you want users to see when downloading.
    link.download = 'Resume Santiago Martinez Vallejo.pdf'; // This can be any filename you wish
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <>
      <button class="Download-button" onClick={handleDownload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            fill="white"
          ></path>
        </svg>
        <span>Download CV</span>
      </button>
    </>
  );
}

export default DownloadCV;

