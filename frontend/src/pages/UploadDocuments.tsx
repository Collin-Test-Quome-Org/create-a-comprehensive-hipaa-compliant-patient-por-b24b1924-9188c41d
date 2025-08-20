import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';
import { useRef, useState } from 'react';

export const UploadDocuments = () => {
  const [file, setFile] = useState<File|null>(null);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setSuccess(false);
    }
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setSuccess(true); // fake success
    }
  };
  return (
    <main className="max-w-lg mx-auto py-10 px-4">
      <Card className="shadow-lg border-0">
        <CardHeader className="flex flex-row items-center gap-3 pb-4 border-b">
          <UploadCloud className="text-[#1d4ed8]" />
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Upload Medical Document</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4" aria-label="Upload Medical Document">
            <label htmlFor="document-upload" className="flex flex-col items-center border-2 border-dashed border-[#94a3b8] rounded-lg px-6 py-8 cursor-pointer hover:bg-blue-50 transition">
              <UploadCloud className="text-[#1d4ed8] mb-2" size={40} />
              <span className="font-semibold text-[#1d4ed8]">Click or drag to upload</span>
              <span className="text-slate-500 text-xs mt-1">Supported: PDF, JPG, PNG. Max 10MB.</span>
              <input
                ref={inputRef}
                id="document-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={onFileChange}
              />
              {file && <span className="mt-3 text-[#1d4ed8] font-medium">Selected: {file.name}</span>}
            </label>
            <Button
              type="submit"
              className="bg-[#1d4ed8] text-white hover:bg-blue-700"
              disabled={!file}
              id="upload-document-submit"
            >
              Upload
            </Button>
            {success && <div className="text-green-700 font-medium text-sm mt-2">Document uploaded successfully!</div>}
          </form>
        </CardContent>
      </Card>
    </main>
  );
};
