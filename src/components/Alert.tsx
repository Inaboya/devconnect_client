import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Alert: React.FC = () => {
  const alerts = useSelector((state: RootState) => state.alert);
  return (
    <div className="alert-wrapper">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

export default Alert;
