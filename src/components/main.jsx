import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/sup.jpg"
            alt="Card"
                  style={{ height: '700px',  objectFit: 'cover' }}  // Adjust size using inline styles

          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter"></h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
