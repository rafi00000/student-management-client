import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const LoginPage = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
        role: "student",
      };

      axiosPublic.post("/users", userInfo)
      .then(res =>{
        console.log(res.data);
        navigate("/")
      })
      .catch(err => {
        console.log(err);
      })


    });
  };

  return (
    <div className="space-y-5">
      <form
        className="w-3/4 lg:w-1/3 mx-auto space-y-3 border border-black mt-6 p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <p className="text-4xl font-mono font-bold text-center">Login page</p>
        <div className="form-control">
          <label>Email</label>
          <input type="email" className="input input-bordered" name="email" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input input-bordered"
            name="password"
          />
        </div>
        <div>
          <p className="text-center">
            <button className="btn btn-outline">Login</button>
          </p>
        </div>
      </form>
      <div>
        <p className="text-center">
          <button onClick={handleGoogle} className="btn btn-outline">
            Google Login
          </button>
        </p>
      </div>
      <div>
        <p className="text-center">
          New here?{" "}
          <Link className="font-bold text-blue-600" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
