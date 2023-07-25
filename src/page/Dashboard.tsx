import React from 'react'
import { Link } from 'react-router-dom';
import DashboardActions from '../components/DashboardActions';
import Experience from '../components/Experience';
import Education from '../components/Education';

const Dashboard: React.FC = () => {
  const profile = null;
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        {/* <i className="fas fa-user" /> Welcome {user && user.name} */}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          {/* <Experience experience={profile.experience} />
          <Education education={profile.education} /> */}

          <div className="my-2">
            <button className="btn btn-danger">
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  )
}

export default Dashboard;