import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/slice/authSlice';
import { AppDispatch } from '../redux/store';
import { override } from './RegisterPage';
import { ClipLoader } from 'react-spinners';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);

  const { email, password } = formData;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error('Please enter all fields', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      return;
    } else {
      const payload = {
        email,
        password,
      };

      const data = await dispatch(loginUser(payload));

      if (data.type === 'auth/loginUser/rejected') {
        toast.error(data.payload, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        });
        setLoading(false);

        return;
      } else {
        toast.success('Login success', {
          position: toast.POSITION.TOP_LEFT,
        });
        setLoading(false);

        navigate('/dashboard');
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="container">
      <ClipLoader
        loading={loading}
        color="blue"
        cssOverride={override}
        size={150}
      />

      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default LoginPage;
