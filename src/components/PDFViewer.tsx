import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: File | null;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  if (!file) return null;

  return (
    <div className="w-full max-w-2xl border rounded-lg p-4 bg-white">
      <Document
        file={file}
        className="flex justify-center"
        loading={
          <div className="flex justify-center p-4">
            <p>Cargando PDF...</p>
          </div>
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};