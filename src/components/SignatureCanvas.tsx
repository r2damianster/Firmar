import React, { useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Eraser } from 'lucide-react';

interface SignatureCanvasProps {
  onSave: (signature: string) => void;
}

export const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSave }) => {
  const signaturePadRef = useRef<SignaturePad>(null);

  const clear = () => {
    signaturePadRef.current?.clear();
  };

  const save = () => {
    if (signaturePadRef.current?.isEmpty()) return;
    const dataUrl = signaturePadRef.current?.getTrimmedCanvas().toDataURL('image/png');
    if (dataUrl) {
      onSave(dataUrl);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="border rounded-lg p-4">
        <div className="bg-white border rounded-lg">
          <SignaturePad
            ref={signaturePadRef}
            canvasProps={{
              className: 'w-full h-48 border rounded-lg',
            }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={clear}
            className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Eraser className="w-4 h-4 mr-2" />
            Borrar
          </button>
          <button
            onClick={save}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Guardar firma
          </button>
        </div>
      </div>
    </div>
  );
};