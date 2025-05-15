import React from "react";

const Error = ({ message }) => (
  <div className="error" style={{ color: "red" }}>
    <p>Errore: {message}</p>
  </div>
);

export default Error;