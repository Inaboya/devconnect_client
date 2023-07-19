import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

toast.configure();

interface LoginPageProps {
  loginUser: (data: {
    email: string;
    password: string;
  }) => Promise<string | void>;
}

const LoginPage: React.FC<LoginPageProps> = ({ loginUser }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password) {
      toast.error("Please enter all fields", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }

    const response = await loginUser({ email, password });

    console.log(response)

    if (typeof response === "string") {
      toast.error(response, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    setLoading(false);

    toast.success("Login successful", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 5000,
    });

    navigate("/");
  };

  const { email, password } = formData;
  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength={6}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn-register">
            {" "}
            Sign In
            {loading && (
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

// export default LoginPage;

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
};
export default connect(null, { loginUser })(LoginPage);
