import React, { useState } from 'react';
import { FileSignature } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { SignatureCanvas } from './components/SignatureCanvas';
import { PDFViewer } from './components/PDFViewer';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleSignatureSave = (signatureData: string) => {
    setSignature(signatureData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center mb-8">
          <FileSignature className="w-8 h-8 text-blue-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            Firma Digital de PDFs
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {!file ? (
            <FileUpload onFileSelect={handleFileSelect} />
          ) : (
            <>
              <PDFViewer file={file} />
              <SignatureCanvas onSave={handleSignatureSave} />
              {signature && (
                <div className="w-full max-w-2xl">
                  <button
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Aplicar firma al PDF
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;