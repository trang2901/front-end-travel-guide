import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import "./header.css";
import { LoginContext } from "../../LoginContext";
import { Button, Grid, Stack, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
// import { Row, Col } from "antd";
// import logo from "../../image/DORIS_TOURS.png";
import { red } from "@mui/material/colors";
const Header = () => {
  const customerID = useContext(LoginContext);
  const [customerName, setCustomerName] = useState("");

  // const vitri = customerName.charAt(0);

  let navigate = useNavigate();
  function buttonStyle(primaryColor, secondColor) {
    var obj = {
      backgroundColor: `${primaryColor}`,
      color: `${secondColor}`,
      "&:hover": {
        backgroundColor: `${primaryColor}`,
        opacity: 0.6,
      },
    };
    return obj;
  }

  return (
    <>
      <div>
        <div className="header-blue">
          <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="/"
                style={{
                  color: "#f97150",
                  fontWeight: "bold",
                  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                DORIS TOURS{" "}
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              ></button>

              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  {/* TRANG CHỦ Ở ĐÂY ========================================================================*/}
                    
                  {/* TIN TỨC Ở ĐÂY======================================================================================================== */}
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      href="/blog"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      CẨM NANG DU LỊCH
                    </a>
                  </li>
                </ul>

                <span style={{width: '400px'}}></span>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
