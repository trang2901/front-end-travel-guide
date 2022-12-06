import React, { useState, useEffect, useContext } from "react";

import { Header,SideBar, FooterNav } from "../../containers";
// import { Header} from "../../components";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import { TourDataContext } from "./TourDataContext.js";
import { ComponentsRouter } from "../../components";
import "./home.scss";
const Home = () => {
  const [dataTour, setdataTour] = useState({});
  const guiderID = useContext(LoginContext);
  let tourSlug = "";
  useEffect(() => {
    fetchTourSlug();
  }, []);

  const fetchTourSlug = () => {
    const fetchDataTour = (slug) => {
      axios(`http://localhost:3001/tour/${slug}`).then(
        ({ data }) => {
          setdataTour(data);
        }
      );
    };

    axios(`http://localhost:3001/huongdanvien/${guiderID}`).then(
      ({ data }) => {
        tourSlug = data.tour_hd[0].slug;
        fetchDataTour(tourSlug);
      }
    );
  };

  return (
    <TourDataContext.Provider value={dataTour}>
      <div className="App">
        <Header />
        <div className="padding-section">
          <ComponentsRouter />
        </div>
      </div>
    </TourDataContext.Provider>
  );
};

export default Home;
//
