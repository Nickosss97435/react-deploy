import React, { useState } from "react";
import { usePdf } from "@mikecousins/react-pdf";

const MyPdfViewer = () => {
  const [page, setPage] = useState(1);
  const { Document, Page, pdfDocument } = usePdf();
  const numPages = pdfDocument ? pdfDocument.numPages : 0;

  return (
    <div>
      <Document file="./Vtac/pages/BL_01.pdf">
        <Page pageNumber={page} />
        <nav>
          <ul className="pager">
            <li className="previous">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </Document>
    </div>
  );
};

export default MyPdfViewer;
