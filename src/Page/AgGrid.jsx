import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function AgGrid() {
  const [columnDefs, setColumnDefs] = useState(
    [{
      headerName: "Make", field: "make"
    }, {
      headerName: "Model", field: "model"
    }, {
      headerName: "Price", field: "price"
    }]
  );
  const [rowData, setRowData] = useState(
    [{
      make: "Toyota", model: "Celica", price: 35000
    }, {
      make: "Ford", model: "Mondeo", price: 32000
    }, {
      make: "Porsche", model: "Boxter", price: 72000
    }]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '250px',
        width: '600px'
      }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
}

export default AgGrid;