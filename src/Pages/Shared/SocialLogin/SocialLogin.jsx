import { useContext } from "react";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //
  const { googleSignIn } = useContext(AuthContext);

  //
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const logedInUser = result.user;
      const savedUser = {
        name: logedInUser.displayName,
        email: logedInUser.email,
      };
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });

      console.log(logedInUser);
    });
  };

  return (
    <div className="mt-4">
      <div className="divider">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-square bg-green-400 border-none  btn-outline"
        >
          <FaGoogle className="text-2xl"></FaGoogle>
        </button>
        <button className="btn bg-blue-600 text-white btn-square btn-outline">
          <FaFacebook className="text-2xl"></FaFacebook>
        </button>
        <button className="btn bg-black  text-white btn-square btn-outline">
          <FaGithubAlt className="text-2xl"></FaGithubAlt>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
