import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function AgGrid() {

  const [gridApi, setGridApi] = useState();

  const [columnDefs, setColumnDefs] = useState(
    [{
      headerName: "userId", field: "userId", checkboxSelection: true
    }, {
      headerName: "id", field: "id"
    }, {
      headerName: "title", field: "title"
    }, {
      headerName: "completed", field: "completed"
    }]
  );
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(rowData => setRowData(rowData));
  }, [])


  const onClick = () => {

    const selectNodes = gridApi.getSelectedNodes();
    const selectData = selectNodes.map(node => node.data);
    const selectDataString = selectData.map(node => node.id).join("&");
    alert(`selectDataString: ${selectDataString}`);

  }

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '400px',
        width: '800px'
      }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection='multiple'
        onGridReady={params => {
          setGridApi(params.api)
        }}
      />
      <button onClick={onClick}>INPUT</button>
    </div>
  );
}

export default AgGrid;