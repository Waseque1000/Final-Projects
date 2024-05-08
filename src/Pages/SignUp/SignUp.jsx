import { useForm } from "react-hook-form";
import img from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

//
const SignUp = () => {
  const { createUser, updateProfileUser } = useContext(AuthContext);

  //
  const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name, data.photoUrl)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        console.log(loggedUser);
        Swal.fire({
          title: "Successfully Sign In",
          text: "Welcome to Bistro Boss",
          icon: "success",
        });
        updateProfileUser(data.name, data.photoUrl)
          .then(() => {
            console.log("user updated");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center md:w-1/2 pl-10 lg:text-left">
            <img src={img} alt="" />
          </div>
          {/*  from */}
          {/* TODO: */}
          <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            {/*   */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url </span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl")}
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
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
                  {...register("password")}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up "
                />
              </div>
              <p>
                <small>
                  Already registered?
                  <Link className="text-blue-600" to={"/login"}>
                    Go to log in
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
