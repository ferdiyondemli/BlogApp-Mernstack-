import React from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import Card from "../../Components/SideCard/Card";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="about-section">
          <h1>About Me Page</h1>
          <p>
            I pay close attention to details, even when working to meet tight
            deadlines. In my last role, I worked on the launch of a new app. I
            discovered a bug shortly before the launch date. By working closely
            with my colleagues, and adjusting our internal deadlines for other
            projects, we were able to fix the bug and keep our scheduled launch
            date. Our app had 20% more downloads after the first week, with an
            overall higher star rating, compared to our company average.
          </p>
        </div>

        <SideBar />
      </div>
    </>
  );
}
