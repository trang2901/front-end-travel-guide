import React, { useEffect, useState } from "react";
import { Process, File } from "../../containers";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

import { ArrowBack } from "@mui/icons-material";
import "./detail.scss";
const Detail = () => {
  const [proccessOn, setProccessOn] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [processData, setProcessData] = useState([]);

  const [fileData, setFileData] = useState([]);
  useEffect(() => {
    axios(
      `https://tour-api-dev.herokuapp.com/tour/${searchParams.get("slug")}`
    ).then(({ data }) => {
      setProcessData(data.lich_trinh);
      setFileData(data.du_khach);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="detail">
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        style={{ position: "absolute", left: 0 }}
      >
        {<ArrowBack />}
        Trở về
      </Button>
      <div className="btn--group">
        {proccessOn ? (
          <>
            <Button variant="contained">Địa điểm</Button>
            <Button variant="outlined" onClick={() => setProccessOn(false)}>
              Du khách
            </Button>
          </>
        ) : (
          <>
            <Button variant="outlined" onClick={() => setProccessOn(true)}>
              Địa điểm
            </Button>
            <Button variant="contained">Du khách</Button>
          </>
        )}
      </div>
      <div className="content">
        {proccessOn ? (
          <Process processData={processData} setProcessData={setProcessData} />
        ) : (
          <File fileData={fileData} />
        )}
      </div>
    </div>
  );
};

export default Detail;
