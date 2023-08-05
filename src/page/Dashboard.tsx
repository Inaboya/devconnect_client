import React from "react";
import { Link } from "react-router-dom";
import DashboardActions from "../components/DashboardActions";
import PropTypes from "prop-types";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { getCurrentUserProfile } from "../redux/actions/profile";

interface DashboardProps {
  getCurrentUserProfile: () => Promise<void>;
  profile: any;
  auth: any;
}

const Dashboard: React.FC<DashboardProps> = ({
  getCurrentUserProfile,
  profile,
  auth: { user },
}) => {
  React.useEffect(() => {
    getCurrentUserProfile && getCurrentUserProfile();
  }, [getCurrentUserProfile]);

  console.log({profile}, 'from component')
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
  );
};

Dashboard.propTypes = {
  getCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  profile: state.profile?.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(Dashboard);
