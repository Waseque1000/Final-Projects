import { AuthErrorCodes } from "firebase/auth";
import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";

import img from "../../assets/others/authentication1.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
//

const Login = () => {
  //
  const [disabled, setDisabled] = useState(true);

  // !  log in
  const { logInUser } = useContext(AuthContext);

  //
  const captcahRef = useRef(null);

  //
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  //
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful",
          text: "That thing is still around?",
          icon: "success",
        });

        // ? navigate
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // ! validate
  const handleValidateCaptcha = (e) => {
    const userCaptureValue = captcahRef.current.value;
    if (validateCaptcha(userCaptureValue) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center md:w-1/2 pl-10 lg:text-left">
          <img src={img} alt="" />
        </div>
        {/*  from */}
        {/* TODO: */}
        <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                {/*  captcha */}
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captcahRef}
                placeholder="Captcha"
                name="captcha"
                className="input input-bordered"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>

            <div className="form-control mt-6">
              <input
                // TODO: waiting
                type="submit"
                // disabled={disabled}
                className="btn btn-primary"
                value="Log in "
              />
            </div>
            <p>
              <small>
                New Here ?{" "}
                <Link className="text-blue-600" to={"/signup"}>
                  Create An account{" "}
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
