import React, { useCallback } from 'react';
import { FileUp } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type === 'application/pdf') {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type === 'application/pdf') {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-2xl p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <FileUp className="w-12 h-12 text-gray-400" />
        <p className="text-lg font-medium text-gray-600">
          Arrastra y suelta tu archivo PDF aquí
        </p>
        <p className="text-sm text-gray-500">o</p>
        <label className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
          Seleccionar archivo
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileInput}
          />
        </label>
      </div>
    </div>
  );
};