import { useSelector, useDispatch } from "react-redux";
import authService from "../../appwrite/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ID } from "appwrite";
import { login as authLogin, start, end } from "../../features";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    try {
      dispatch(start());
      const id = ID.unique();
      const login = await authService.signup({ id, ...data });

      if (login) {
        dispatch(authLogin(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(end());
    }
  };

  return (
    <div>
      <form
        action=""
        className="w-full max-w-[300px] mx-auto mt-10 p-5 flex flex-col border"
        onSubmit={handleSubmit(signup)}
      >
        <h1 className="text-center text-2xl pb-4">Sign up</h1>
        <label htmlFor="name" className="py-2">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full border p-2 my-1"
          {...register("name", {
            required: true,
          })}
        />
        <label htmlFor="email" className="py-2">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full border p-2 my-1"
          {...register("email", {
            required: true,
          })}
        />
        <label htmlFor="password" className="py-2">
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="w-full border p-2 my-1"
          {...register("password", {
            required: true,
          })}
        />
        <input
          type="submit"
          value="Login"
          className="w-full border p-2 my-1 bg-red-400 text-white mt-3 active:scale-90 active:translate-y-1 active:bg-red-500 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default SignupForm;
