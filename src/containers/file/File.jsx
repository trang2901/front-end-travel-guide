import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Table } from "../../components";
import "./file.scss";
const File = ({ fileData }) => {
  const [inputSearch, setInputSearch] = useState("");
  const customerHeading = ["STT", "Họ Tên", "SĐT"];

  const customerSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const searchedData = fileData.filter((customer) =>
    customer.ho_ten.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return ( 
    <>
    <div className="file">
      <TextField
        type="text"
        onChange={customerSearch}
        placeholder="Nhập tên khách hàng (có dấu)"
        sx={{ width: "100%", margin: "2rem 0 1rem 0" }}
      />
      {inputSearch ? (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={searchedData}
        />
      ) : (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={fileData}
        />
      )}
    </div>

    {/* <div className="file">
      <TextField
        type="text"
        onChange={customerSearch}
        placeholder="Nhập tên khách hàng (có dấu)"
        sx={{ width: "100%", margin: "2rem 0 1rem 0" }}
      />
      {inputSearch ? (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={searchedData}
        />
      ) : (
        <Table
          tableLabel="Khách hàng"
          customer="customer--table"
          tableHeading={customerHeading}
          tableData={fileData}
        />
      )}
    </div> */}
    </>
  );
};

export default File;
//
