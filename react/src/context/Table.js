import React,{useState} from "react";
import { connect } from "react-redux";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns,columns2 } from './Data.js';

const Table = ({ data, data2 }) => {
    console.log( data );
  const searchTable = (
     <DataTableExtensions columns={columns} data={data}>
      <DataTable
        highlightOnHover={true}
        noHeader={true}
        defaultSortField = "id"
        pagination={true}
        subHeader={true}
      />
    </DataTableExtensions>
    
  );
  const searchTable2 = (
     <DataTableExtensions columns={columns2} data={data2}>
      <DataTable
        highlightOnHover={true}
        noHeader={true}
        defaultSortField = "id"
        pagination={true}
        subHeader={true}
      />
    </DataTableExtensions>
  );
   return (
  <div>
    <h2 className="text-secondary">Data</h2>
    {searchTable}
    <h2 className="text-secondary">Data 2</h2>
    {searchTable2}
  </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    isLoggedIn: state.isLoggedIn,
    
  };
}
export default connect( mapStateToProps )( Table );

