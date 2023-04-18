import { useState, CSSProperties } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../redux/slice/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      toast.error('Please enter all fields', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      return;
    }

    if (password !== password2) {
      toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });

      return;
    } else {
      const payload = {
        name,
        email,
        password,
        password2,
      };

      const data = await dispatch(registerUser(payload));

      if (data.type === 'auth/registerUser/rejected') {
        console.log(data.payload, 'data.payload');
        if (typeof data.payload === 'string') {
          toast.error(data.payload, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          });
          return;
        }
        data?.payload?.forEach((error: any) => {
          toast.error(error, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          });
        });

        return;
      } else if (data.type === 'auth/registerUser/fulfilled') {
        toast.success('User successfully registered', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        });
        navigate('/login');
      }
    }
  };
  return (
    <>
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </>
  );
};

export default RegisterPage;
