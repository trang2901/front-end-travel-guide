import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContext";
import Avatar from '@mui/material/Avatar';
import {Row, Col} from 'antd';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import "./header.scss";
const Header = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const guiderID = useContext(LoginContext);
  const settingOptions = [
    { id: "home/detail", label: "Chi tiết", function: () => {} },
    {
      id: "login",
      label: "Đăng xuất",
      function: () => {
        window.sessionStorage.clear();
        window.location.href = "/login";
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="icon"
        onMouseEnter={() => setMenuOn(true)}
        onMouseLeave={() => setMenuOn(false)}
        onClick={() => {
          setMenuOn(false);
        }}
      >
         <Stack direction="row" spacing={2}>
         <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
         <p style={{textAlign: 'center', fontSize: '15px'}}>{window.sessionStorage.getItem("guiderName")}</p>
         </Stack>

       
        {menuOn ? (
          <div className="setting">
            <ul className="setting--option">
              {settingOptions.map((item) => (
                <li onClick={item.function}>{item.label}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
//
