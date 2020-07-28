import './App.css';
import "@progress/kendo-theme-default/dist/all.css";

import React from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";
import PageTemplate from "./components/PageTemplate";
import {PAGE_BREAK_CLASS} from "./common/consts";
import PropertyPortfolio from "./components/pages/portfolio/PropertyPortfolio";
import Home from "./components/pages/home/Home";
import PropertyPortfolioDisplayFlex from "./components/pages/portfolio/PropertyPortfolioDisplayFlex";

function App() {
  let pdfExportComponent;

  return (
      <div className="App">
        <button className="k-button" onClick={() => pdfExportComponent.save()}>
          Export PDF
        </button>
        <PDFExport
            margin={{ bottom: "3cm", left: "1.5cm", top: "1.5cm", right: "1.5cm" }}
            ref={component => (pdfExportComponent = component)}
            paperSize="Letter"
            landscape={true}
            fileName="1031 Exchange Investment Plan"
            author="Author"
            forcePageBreak={`.${PAGE_BREAK_CLASS}`}
            pageTemplate={PageTemplate}
        >
            <Home />
            <PropertyPortfolio />
            <PropertyPortfolioDisplayFlex />
        </PDFExport>
      </div>
  );
}

export default App;
