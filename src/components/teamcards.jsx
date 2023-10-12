import TeamCard from "./teamcard";
import team from "./team_data";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';


export default function TeamSection() {
  const [selected, setSelected] = useState("Core");
  
  useEffect(() => {
    const app = document.getElementById('typewriter');
    const typewriter = new Typewriter(app, {
      loop: true
    });

    const getQuotes = async () => {
      const response = await fetch("https://api.quotable.io/quotes/random?limit=3&tags=technology|famous-quotes|creativity&maxLength=100")
      const data = await response.json();
      
      let writer = typewriter
  
      for(let i=0; i<data.length; i++){
          writer = writer.typeString(`"${data[i].content}" - ${data[i].author}`)
          .pauseFor(2000)
          .deleteAll()
      }
  
      writer.start()
  }


    getQuotes()
  },[])

  return (
    <>
      <section id="team-section">
        <h1 className="header-font-700">Meet Our Team</h1>
        <div id="typewriter" className="body-font-500 team-quotes"></div>
        <div className="wrapper">
          {Object.keys(team).map((key) => {
            return (
              <input
                type="radio"
                name="slider"
                id={key}
                checked={selected === key}
                onChange={() => setSelected(key)}
              />
            );
          })}
          <nav className="desk-view-tabs">
            {Object.keys(team).map((key) => {
              return (
                <label for={key} className={key}>
                  {key}
                </label>
              );
            })}
            <div className="slider"></div>
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
              {Object.keys(team).map((key) => {
                return (
                  <li>
                    <label for={key} className="dropdown-item" data-value={key}>
                      {key}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <section id="team">
            <div className="content-holder">
              <div className="cards-container">
                <div className="member-cards">
                  {
                    // render the content section for selected key
                    team[selected].map((member) => {
                      return (
                        <>
                          <TeamCard {...member} />
                        </>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
