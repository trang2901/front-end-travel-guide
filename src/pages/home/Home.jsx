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
      axios(`https://tourapi-dev-n.herokuapp.com/tour/${slug}`).then(
        ({ data }) => {
          setdataTour(data);
        }
      );
    };

    axios(`https://tourapi-dev-n.herokuapp.com/huongdanvien/${guiderID}`).then(
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
