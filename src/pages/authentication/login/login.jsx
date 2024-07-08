import axios from "axios";
import Img from "../../../assets/Group143.png";
import { useRegisterHook } from "../../hooks/useRegisterHook"
import { useForm } from "react-hook-form";
const Login = () => {
  const registerHook = useRegisterHook();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 

 
  const onSubmit = (data) => {
    registerHook.handleLogin(data);
  };
  console.log(registerHook?.loginResponse,"login")
  const shadow =
    "box-shadow: 4px 4px 15px 0px #C3C3C3 inset, -6px -4px 15px 0px #FFF inset;";
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login">
          <div className="flex justify-center">
            <div className="container">
              <div className="inputs max-w-md mx-auto mt-5 p-6 bg-white rounded-lg ">
                <div className="flex justify-center mb-6">
                  <img src={Img} alt="search" />
                </div>

                <div className="mb-6 mt-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    User Name
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    style={
                      errors.email
                        ? { border: "1px solid red" }
                        : { border: "1px solid #8A8AA033" }
                    }
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#1F5E7C] text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    style={
                      errors.password
                        ? { border: "1px solid red" }
                        : { border: "1px solid #8A8AA033" }
                    }
                    {...register("password", { required: true })}
                  />
                </div>

                <button
                  className="bg-gradient-to-b from-blue-500 to-indigo-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                 {registerHook.loading ? "Loading..." : "Login"} 
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
