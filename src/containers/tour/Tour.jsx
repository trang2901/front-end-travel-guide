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
    axios(`https://tourapi-dev-n.herokuapp.com/tour`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.nguoi_hd["_id"] === guiderID
      );
      setGuideTour(filterData);
    });
  }, []);

  const renderTour = (tour) => (
    // <Link to={`/home/detail?slug=${tour.slug}`} className="tour--item">
    //   <img
    //     src={`https://tourapi-dev-n.herokuapp.com/${tour.hinh[0]}`}
    //     style={{ width: "20%"}}
    //   />
    //   <div className="Header--item">
    //     <div className="item">
    //     <p>{tour.ten}</p>
    //     <small>Khởi hành: {dateFormat(tour.khoi_hanh, "dd/mm/yyyy")}</small>
    //     </div>
    //     <p></p>
    //     <div className="detail--item">
    //           <Row style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
                
    //             <Col span={5}><i className="fa-solid fa-plane-departure"></i><strong>Nơi khởi hành: </strong><label>{tour.diemkhoihanh}</label></Col>
    //           </Row>
    //           <p></p>
    //           <Row>
    //             <Col span={5}><strong>Thời gian: </strong><label>{tour.thoigian}</label></Col>
    //           </Row>
    //        <p>
    //        </p>
    //        <Row>
    //             <Col span={5}><strong>Số lượng du khách: </strong><label>{tour.du_khach.length}</label></Col>
    //           </Row>
           
    //     </div>
    //   </div>
      
    // </Link>
<>
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/> */}
<Container>
<Link to={`/home/detail?slug=${tour.slug}`} className="tour--item">
<div className="container">
<div className="member-entry"> 
    <a href="#" className="member-img"> 
        <img src={`https://tourapi-dev-n.herokuapp.com/${tour.hinh[0]}`} className="img-rounded"/> 
        <i className="fa fa-forward"></i> 
    </a>
    <div className="member-details"> 
        <h4> <a href="#" style={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'sans-serif', color: '#f97150'}}>{tour.ten}</a> </h4> 
        <div className="row info-list"> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                <i className="fa fa-briefcase"></i>
                Khởi hành: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif', color: '#08183c'}}>{dateFormat(tour.khoi_hanh, "dd/mm/yyyy")}</strong></a> 
            </div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                <i className="fa fa-twitter"></i> 
                Nơi khởi hành: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif',  color: '#08183c'}}>{tour.diemkhoihanh}</strong></a> 
            </div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                <i className="fa fa-facebook"></i> 
                Thời gian: <a href="#" style={{fontFamily: 'sans-serif'}}><strong style={{fontFamily: 'sans-serif',  color: '#08183c'}}>{tour.thoigian}</strong></a> 
            </div> 
            <div className="clear" style={{color: '#08183c'}}></div> 
            <div className="col-sm-4" style={{color: '#08183c'}}> 
                <i className="fa fa-location"></i> 
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
