import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !password) {
      toast.error("Please enter all fields", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }
    if (password !== password2) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    const response = await registerUser({ name, email, password, password2 });

    if (typeof response === "string") {
      toast.error(response, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      setLoading(false);

      return;
    }

    toast.success("Registration successful", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 5000,
    });

    setLoading(false);

    navigate("/login");
  };

  const { name, email, password, password2 } = formData;
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn-register">
            {" "}
            Register
            {loading && (
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
