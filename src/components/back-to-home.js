import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <Link
      style={{ marginBottom: 20 }}
      id="link-back"
      aria-label="Back to Beer List"
      type="link"
      className="btn btn-outline-dark"
      to={{
        pathname: "/"
      }}
    >
      Back to Beer List
    </Link>
  );
}
