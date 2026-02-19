import { useState, useRef } from "react";

function FileDropZone({ onFilesSelected, acceptedTypes = ["application/pdf", "image/png", "image/jpeg"], maxSize = 10 * 1024 * 1024 }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const validateFile = (file) => {
    if (file.size > maxSize) {
      setError("File must be under 10MB");
      return false;
    }
    const validType = acceptedTypes.some((t) => file.type === t || file.type.startsWith("image/"));
    if (!validType) {
      setError("Only PDF, PNG, JPG allowed");
      return false;
    }
    setError(null);
    return true;
  };

  const handleFiles = (files) => {
    const fileList = Array.from(files || []);
    const valid = fileList.filter(validateFile);
    if (valid.length) onFilesSelected(valid);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleClick = () => inputRef.current?.click();

  return (
    <div
      className={`drop-zone w-full rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer group ${isDragOver ? "drag-over" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="h-12 w-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <span className="material-icons-round text-gray-500 dark:text-gray-400 text-2xl group-hover:text-primary">upload_file</span>
      </div>
      <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark mb-1">
        <span className="text-primary hover:underline">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-4">PDF, PNG, JPG up to 10MB</p>
      {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
      <div className="flex items-center gap-2 text-xs text-text-sub-light dark:text-text-sub-dark bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
        <span className="material-icons-round text-sm">lock</span>
        Encrypted & HIPAA Compliant
      </div>
    </div>
  );
}

export default FileDropZone;
