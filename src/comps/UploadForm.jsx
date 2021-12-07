import React, { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png"];

  const changeHandler = e => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError(
        "Please select a valid file type for the image ( .png  or .jpeg )"
      );
    }
  };
  return (
    <form action="">
      <input type="file" onChange={changeHandler} />
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
    </form>
  );
}
