import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <Link
      type="button"
      className="btn btn-outline-primary"
      to={{
        pathname: "/"
      }}
    >
      Back to Beer List
    </Link>
  );
}
