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
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "30%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "25%"}} />
        </colgroup>
        <thead>
          <tr>
            {tableHeading?.map((heading) => (
              <th>
                <p style={{color: '#f97150', textTransform: 'uppercase' }}>{heading}</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {customer
            ? tableData?.map((data, index) => (
                // <div className="table--t">
                <tr id={data.id} data-id={data.id} style={{border: '1px solid grey'}}>
                  <td onClick={handleTrClick}>
                    <p>{index+1}</p>
                  </td>
                  <td onClick={handleTrClick}>
                    <p>{data.ho_ten}</p>
                  </td>
                  <td onClick={handleTrClick}>
                    <p>{data.sdt}</p>
                  </td>
                  <td>
                    <p>{data.tuoi}</p>
                  </td>
                  <td>
                    <p>{data.so_cmnd}</p>
                  </td>
                </tr>
                // </div>
              ))
            : tableData?.map((data) => (
              <div className="table--s">
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
                  <td>
                    <p>{data.tuoi}</p>
                  </td>
                  <td>
                    <p>{data.so_cmnd}</p>
                  </td>
                </tr>
                </div>
              ))}
        </tbody>
      </table>


    </div>
  );
};

export default Table;
