import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import "./tour.scss";
import {Row, Col} from 'antd'
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
    <Link to={`/home/detail?slug=${tour.slug}`} className="tour--item">
      <img
        src={`https://tourapi-dev-n.herokuapp.com/${tour.hinh[0]}`}
        style={{ width: "20%"}}
      />
      <div className="Header--item">
        <div className="item">
        <p>{tour.ten}</p>
        <small>Khởi hành: {tour.khoi_hanh}</small>
        </div>
        <p></p>
        <div className="detail--item">
              <Row style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
                <Col span={5}><i className="fa-solid fa-plane-departure"></i><strong>Nơi khởi hành:</strong> {tour.diemkhoihanh}</Col>
              </Row>
              <p></p>
              <Row>
                <Col span={5}><strong>Thời gian:</strong> {tour.thoigian}</Col>
              </Row>
           
        </div>
      </div>
      
    </Link>

  );
  return (
    <>
      <div className="customer--tour__Container">
        <h1>Tour Hướng Dẫn</h1>
        {guideTour?.map((tour) => renderTour(tour))}
      </div>
    </>
  );
};

export default Tour;
