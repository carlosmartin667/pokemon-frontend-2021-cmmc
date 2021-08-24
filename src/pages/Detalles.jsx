import React from "react";
import { DataDetalles } from "../helpers/DataDetalles";

const Detalles = ({ history }) => {

  const {   name, volver } = DataDetalles(history);

  return (
    <>
      <div className="conatainer mx-5 mt-4">
        <div className="">
          <div className="card mb-3 text-white bg-dark" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    {}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-outline-info" onClick={volver}> volver</button>

      </div>
    </>
  );
};

export default Detalles;
