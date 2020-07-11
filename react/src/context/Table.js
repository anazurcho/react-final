import React,{useState} from "react";
import { connect } from "react-redux";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { columns } from './Data.js';

const Table = ({ data }) => {

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
   return (
  <div>
    <h2 className="text-secondary">Data</h2>
    {searchTable}
  </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    isLoggedIn: state.isLoggedIn,
    
  };
}
export default connect( mapStateToProps )( Table );

