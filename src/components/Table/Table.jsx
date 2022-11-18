import React from "react";

import { Face, SupportAgent } from "@mui/icons-material";
import "./table.scss";
const Table = ({ tableLabel, customer, tableHeading, tableData }) => {
  const handleTrClick = (e) => {
    const target = e.target;
    const td = target.parentElement;
    const tr = td.parentElement;
    console.log(target);
    console.log(tr);
    tr.className ? (tr.className = "") : (tr.className = "checked");
  };
  return (
    <div className="table--container">
      <div className="table--label">
        {customer ? <Face /> : <SupportAgent />}
        <h2>{tableLabel}</h2>
      </div>

      <table style={{ width: "100%" }} className={customer}>
        <colgroup>
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "45%" }} />
          <col span="1" style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr>
            {tableHeading?.map((heading) => (
              <th>
                <h3>{heading}</h3>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {customer
            ? tableData?.map((data, index) => (

                <tr id={data.id} data-id={data.id}>
                  <td onClick={handleTrClick}>
                    <p>{index+1}</p>
                  </td>
                  <td onClick={handleTrClick}>
                    <p>{data.ho_ten}</p>
                  </td>
                  <td onClick={handleTrClick}>
                    <p>{data.sdt}</p>
                  </td>
                </tr>
              ))
            : tableData?.map((data) => (
                <tr>
                  <td>
                    <p>{data.role}</p>
                  </td>
                  <td>
                    <p>{data.ho_ten}</p>
                  </td>
                  <td>
                    <p>{data.sdt}</p>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>


    </div>
  );
};

export default Table;
