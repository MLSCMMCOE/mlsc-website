import TeamCard from "./teamcard";
import Event from "./Event";
import team from "./event_data";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "../styles/team_section.css";
import "../styles/teamcard.css";

export default function TeamSection() {
  const [selected, setSelected] = useState(sessionStorage.getItem("selected")? sessionStorage.getItem("selected") : 'Upcomming');

const [cur,setCur]=useState('Upcomming')
  useEffect(() => {
    const app = document.getElementById("typewriter");
    const typewriter = new Typewriter(app, {
      loop: true,
    });

    const getQuotes = async () => {
      const response = await fetch(
        "https://api.quotable.io/quotes/random?limit=3&tags=technology|famous-quotes|creativity&maxLength=100"
      );
      const data = await response.json();

      let writer = typewriter;

      for (let i = 0; i < data.length; i++) {
        writer = writer
          .typeString(`"${data[i].content}" - ${data[i].author}`)
          .pauseFor(2000)
          .deleteAll();
      }

      writer.start();
    };

    getQuotes();
  }, []);

  const handleSelect = (key) => {
    setSelected(key);
    setCur(key)
    sessionStorage.setItem("selected", key);
  };

  return (
    <>
      <section id="team-section">
        <h1 className="header-font-700">Our Events</h1>
        <div id="typewriter" className="body-font-500 team-quotes"></div>
        <div className="wrapper">
          {Object.keys(team).map((key) => (
            <input
              type="radio"
              name="slider"
              id={key}
              checked={selected === key}
              onChange={() => handleSelect(key)}
              key={key}
            />
          ))}
          <nav  className="desk-view-tabs">
            {Object.keys(team).map((key) => (
              <label htmlFor={key}  className={key} key={key}>
                {key}
              </label>
            ))}
            <div className="slider1"></div>
          </nav>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle bg-color-primary-blue color-white"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selected}
            </button>
            <ul className="dropdown-menu">
              {Object.keys(team).map((key) => (
                <li key={key}>
                  <label
                    htmlFor={key}
                    className="dropdown-item"
                    data-value={key}
                  >
                    <input
                      type="radio"
                      id={key}
                      checked={selected === key}
                      onChange={() => handleSelect(key)}
                    />
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <section id="team">
            <div className="content-holder">
              <div className="cards-container">
                <div className="member-cards">
                {team[cur].map((member) => {
                    console.log(member.id)
                    return(
                    <Event {...member} />)
                })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
