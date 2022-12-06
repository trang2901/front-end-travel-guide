import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import "./tour.scss";
import {Row, Col, Divider} from 'antd'
import dateFormat from 'dateformat';
import { Container } from "@mui/system";
const Tour = () => {
  const [guideTour, setGuideTour] = useState([]);
  const guiderID = useContext(LoginContext);
  useEffect(() => {
    axios(`http://localhost:3001/tour`).then(({ data }) => {
      console.log('data', data);

      const filterData = data.filter(
        (bookedTour) => bookedTour.nguoi_hd["_id"] === guiderID
      );

      console.log('filterData:', filterData);
      setGuideTour(filterData);
    });
  }, []);

  const renderTour = (tour) => (
<>
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/> */}
<Container>
<Link to={`/home/detail?slug=${tour.slug}`} className="tour--item">
<div className="container">
<div className="member-entry"> 
    <a href="#" className="member-img"> 
        <img src={`http://localhost:3001/${tour.hinh[0]}`} className="img-rounded"/> 
        <i className="fa fa-forward"></i> 
    </a>
    <div className="member-details"> 
        <h4> <a href="#" style={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'sans-serif', color: '#f97150'}}>{tour.ten}</a> </h4> 
        <div className="row info-list"> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
            
                Khởi hành: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif', color: '#08183c'}}>{dateFormat(tour.khoi_hanh, "dd/mm/yyyy")}</strong></a> 
            </div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                
                Nơi khởi hành: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif',  color: '#08183c'}}>{tour.diemkhoihanh}</strong></a> 
            </div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
               
                Thời gian: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif',  color: '#08183c'}}>{tour.thoigian}</strong></a> 
            </div> 
            <div className="clear" style={{color: '#08183c'}}></div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                
                Số lượng du khách: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif',  color: '#08183c'}}>{tour.du_khach.length}</strong></a> 
            </div> 
        </div> 
    </div> 
</div>
</div>
</Link>
</Container>
</>
  );

  return (
    <>
      <div className="customer--tour__Container">
        <p className="title--item">TOUR PHỤ TRÁCH</p>
        {guideTour?.map((tour) => renderTour(tour))}
      </div>
    </>
  );
};

export default Tour;
