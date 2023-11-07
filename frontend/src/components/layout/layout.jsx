import React from "react";
import Navigation from "../navigation/navigation";
import { useState } from "react";
export default function Layout({ children }) {
    const [sideNavigation, setSideNavigation] = useState(true);
  return (
    <div className="layoutCotainer">
      <div>
        <Navigation />
      </div>
      <div className="children">
        {children}
      </div>
    </div>
  );
}
