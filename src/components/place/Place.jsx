import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import "./place.scss";
import axios from "axios";
const Place = ({ data, status, proccessData, index }) => {
  const [open, setOpen] = useState(false);
  const [statusState, setStatusState] = useState(status);
  const [tourID, setTourID] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios(
      `https://tourapi-dev-n.herokuapp.com/tour/${searchParams.get("slug")}`
    ).then(({ data }) => setTourID(data["_id"]));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const renderButton = () => {
    if (statusState === "Đang đến")
      return (
        <Button color="primary" variant="outlined" onClick={changeState}>
          {statusState}
        </Button>
      );

    if (statusState === "Đã tham quan")
      return (
        <Button color="success" variant="contained">
          {statusState}
        </Button>
      );

    return (
      <Button color="error" variant="outlined" onClick={changeState}>
        {statusState}
      </Button>
    );
  };

  const changeState = () => {
    if (statusState === "Chưa hoàn thành") {
      axios
        .put(
          `https://tourapi-dev-n.herokuapp.com/lichtrinh/${proccessData[index]["_id"]}`,
          {
            trang_thai: "Đang đến",
          }
        )
        .then(() => setStatusState("Đang đến"));
    }
    if (statusState === "Đang đến") {
      axios
        .put(
          `https://tourapi-dev-n.herokuapp.com/lichtrinh/${proccessData[index]["_id"]}`,
          {
            trang_thai: "Đã tham quan",
          }
        )
        .then(() => setStatusState("Đã tham quan"));
    }
  };

  const renderStatusLabel = () => {
    if (statusState === "Đang đến")
      return <small className={`status going`}>{statusState}</small>;
    else if (statusState === "Đã tham quan")
      return <small className={`status going`}>{statusState}</small>;
    else return <small className={`status wait`}>{statusState}</small>;
  };

  return (
    <>
      <div className="place--container" onClick={handleClickOpen}>
        <div className="place--img">
          <img src={`https://tourapi-dev-n.herokuapp.com/${data.hinh}`} />
        </div>
        <div className="place--information">
          <h1>{data.ten}</h1>
          {renderStatusLabel()}
        </div>
      </div>
      <div>
        <Dialog
          scroll="paper"
          fullWidth="100%"
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            inputProps={{ index: index }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {`Địa điểm: ${data.ten}`}
            {renderButton()}
          </DialogTitle>
          <DialogContent dividers={true}>
            <div className="overFlow">
              <h1>Thông tin địa điểm</h1>
              <p>{data.mo_ta}</p>
              <h1>Gợi ý tham quan</h1>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Thoát</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Place;
