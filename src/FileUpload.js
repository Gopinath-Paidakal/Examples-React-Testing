import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const baseURL = process.env.REACT_APP_BASE_URL;
  console.log(baseURL);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return alert("Select a file first!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/Upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setUploadStatus(`Upload successful: ${data.filePath}`);
    } catch (error) {
      console.error("Upload failed", error);
      setUploadStatus("Upload failed ❌");
    }
  };

  return (
    <div>
      <h2>Upload File to Server</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      <p>{uploadStatus}</p>
    </div>
  );
}

export default FileUpload;




















// import React, { useState } from "react";

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const uploadFile = () => {
//     if (!file) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     fetch("http://localhost:3000/Upload", {
//       method: "POST",
//       body: formData, // Sending multipart/form-data
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Upload failed!");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUploadStatus("Upload successful! ✅");
//         console.log("Server Response:", data);
//       })
//       .catch((error) => {
//         setUploadStatus("Upload failed ❌");
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Upload a File</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={uploadFile}>Upload</button>
//       <p>{uploadStatus}</p>
//     </div>
//   );
// }

// export default FileUpload;
