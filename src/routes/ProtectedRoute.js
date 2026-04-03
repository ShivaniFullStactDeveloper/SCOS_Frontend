import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const user = JSON.parse(localStorage.getItem("user"));

  // BACK & FORWARD BUTTON LOCK
  useEffect(() => {
    const disableBack = () => {
      window.history.go(1); // force stay on same page
    };

    // push current page in history
    window.history.pushState(null, "", window.location.href);

    // listen for back/forward
    window.addEventListener("popstate", disableBack);
    

    return () => {
      window.removeEventListener("popstate", disableBack);
    };
  }, []);

  // AUTH CHECK
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}