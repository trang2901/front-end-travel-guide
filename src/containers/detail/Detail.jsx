import React, { useEffect, useState } from "react";
import { Process, File } from "../../containers";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { Tabs } from "antd";
import { Container } from "@mui/system";
import { ArrowBack } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import "./detail.scss";
const Detail = () => {
  const [proccessOn, setProccessOn] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [processData, setProcessData] = useState([]);
  const [fileData, setFileData] = useState([]);
  useEffect(() => {
    axios(
      `http://localhost:3001/tour/${searchParams.get("slug")}`
    ).then(({ data }) => {
      setProcessData(data.lich_trinh);
      setFileData(data.du_khach);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
    <div className="detail">
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        style={{ position: "absolute", left: 0, color: 'green', borderColor: 'green' }}
      >
        {<ArrowBack />}
        Trở về
  </Button>

      <div className="btn--group">
        {proccessOn ? (
          <>
            <Button variant="outlined" style={{color: '#08183c', borderColor: '#08183c'}}>Địa điểm</Button>
            <Button  onClick={() => setProccessOn(false)} style={{color: '#08183c'}}>
              Du khách
            </Button>
          </>
        ) : (
          <>
            <Button  onClick={() => setProccessOn(true)} style={{color: '#08183c'}}>
              Địa điểm
            </Button>
            <Button variant="outlined" style={{color: '#08183c', borderColor: '#08183c'}}>Du khách</Button>
          </>
        )}
      </div>
      
      <div className="content">
        {proccessOn ? (
          <Process processData={processData} setProcessData={setProcessData} />
        ) 
        : 
        (
          <File fileData={fileData} />
        )}
      </div>
   
    </div>
    
    </Container>
  );
};

export default Detail;
