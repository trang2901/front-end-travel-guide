import React, {useState} from "react";
import axios from "axios";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import "./login.scss";
import { Container } from "@mui/system";
const Login = () => {
  // const [isSubmit, setIsSubmit] = useState(false);
  const createLoginRequest = (values) => {
    const getGuiderID = (accountID) => {
      axios
        .get("http://localhost:3001/huongdanvien")
        .then(({ data }) => {
         
          const Data = data.find(
            (guider) => guider.id_tai_khoan?.["_id"] === accountID
          );
          window.sessionStorage.setItem("guiderID", Data["_id"]);
          window.sessionStorage.setItem("guiderName", Data.ho_ten);

          window.location.href = "/";
          // "https://splendorous-twilight-340914.netlify.app"
        });
    };

    axios(`http://localhost:3001/taikhoan/${values.username}`)
      .then(({ data }) => {
        console.log(data);
        if (data == null) alert("Tài khoản hoặc mật khẩu không đúng");
        else {
          if (data.password === values.password) {
            getGuiderID(data["_id"]);
          } else alert("Mật khẩu không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      createLoginRequest(values);
    },
  });
  return (
    <>
    {/* <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <h1> Hướng dẫn viên du lịch</h1>
        <TextField
          id="username"
          name="username"
          label="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <TextField
          id="password"
          name="password"
          label="Mật khẩu"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit">Đăng nhập</Button>


      </form>


    </div> */}
<Container>
<div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={formik.handleSubmit}>
				<div className="login__field">
					<input type="text" 
          className="login__input" 
          placeholder="Tên đăng nhập"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          />
				</div>
				<div className="login__field">
					<input type="password" 
          className="login__input" 
          placeholder="Mật khẩu"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          />
				</div>
      
				<button className="button login__submit">
					<span className="button__text" type="submit">Đăng nhập ngay</span>
					
				</button>	


			</form>
			<div className="social-login">
				<h3 style={{textAlign: 'center', color: '#08183c'}}>HƯỚNG DẪN VIÊN</h3>
			
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</Container>
</>

  );
};

export default Login;
//
