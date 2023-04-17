import React from 'react';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="loader__container">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
