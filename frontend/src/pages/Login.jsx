import GoogleButton from "../components/auth/GoogleButton";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {

  return (
    <>
      <section className="w-full h-[80vh] flex justify-center items-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-[90%] sm:w-[400px]">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

          {/* Email Input */}
          <LoginForm />

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Login Button */}
          <GoogleButton />
        </div>
      </section>
    </>
  );
};

export default Login;
