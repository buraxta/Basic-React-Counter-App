import React from "react";

const Counter = ({ id, value, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="container m-2">
      <div className="row row-cols-auto">
        <div className="col">
          {value === 0 ? (
            <span className="badge fs-5 text-bg-warning ">zero</span>
          ) : (
            <span className="badge px-4 fs-5 text-bg-primary">{value}</span>
          )}
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(id)}
            className="fw-bold btn btn-secondary"
          >
            +
          </button>
        </div>
        <div className="col">
          <button
            onClick={() => onDecrement(id)}
            className="fw-bold btn btn-secondary"
          >
            -
          </button>
        </div>
        <div className="col">
          <button onClick={() => onDelete(id)} className="btn btn-danger">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
