import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Document
        file="/raghu_bandaru.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i + 1}>
            <Page pageNumber={i + 1} scale={1.6} />
            {i + 1 < numPages && <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '0' }} />}
          </div>
        ))}
      </Document>
    </div>
  );
}
