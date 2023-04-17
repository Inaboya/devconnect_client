import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../redux/slice/authSlice';
import { setAlert } from '../redux/slice/alertSlice';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [loading, setLoading] = useState(false);

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123);
    e.preventDefault();
    console.log('testing 1');
    setLoading(true);

    console.log({ loading });

    if (!name || !email || !password || !password2) {
      toast.error('Please enter all fields', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      console.log('testing 2');
      // alert('Please enter all fields');

      setLoading(false);
      return;
    }

    console.log({ name, email, password, password2 });

    console.log('testing 3');

    if (password !== password2) {
      console.log('testing 3');

      toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
      });
      setLoading(false);
      console.log('testing 4');

      return;
    } else {
      const payload = {
        name,
        email,
        password,
        // password2,
      };

      console.log('testing 5');

      const data = await dispatch(registerUser(payload));

      console.log({ data });
      console.log('testing 6');

      if (data.type === 'auth/registerUser/rejected') {
        data.payload.forEach((error: any) => {
          toast.error(error.msg, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000,
          });
        });
        console.log('testing 7');

        setLoading(false);
        console.log('testing 8');

        return;
      } else {
        console.log('testing 9');

        setLoading(false);

        console.log('testing 10');

        navigate('/login');
      }
    }
  };
  return (
    <section className="container">
      <Loader loading={loading} />
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
  );
};

export default RegisterPage;
