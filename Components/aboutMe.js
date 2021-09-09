import aboutmedata from "../yourData";

function aboutMe(props) {
  // const aboutMe = () => {
  return (
    <div>
      <section id="aboutMe" style={{ color: "#616161" }}>
        <div className="container flex">
          <div className="skills-wrapper flex row-gt-sm">
            <div
              className="flex flex-50-gt-sm waypoint"
              data-animation="slide-in-left"
            >
              <img src={aboutmedata.aboutImage} alt="about" className="me" />
              <div className="label bold">{aboutmedata.aboutmepara1}</div>
              <div>
                {aboutmedata.aboutmepara2}
                <a
                  href={aboutmedata.aboutmelink1}
                  target="_blank"
                  className="highlight"
                ></a>
                <br />
                {aboutmedata.aboutmepara3}
                <br />
                <span className="page-link highlight" dest="contact">
                  {aboutmedata.aboutmepara4}
                </span>
              </div>
            </div>

            <div
              className="flex flex-50-gt-sm waypoint bars-wrap"
              data-animation="slide-in-right"
            >
              {aboutmedata.skills.map((skills, index) => (
                <>
                  <div className="bar flex" key={index}>
                    <div className="bar fill" style={{ width: "90%" }}>
                      <div className="tag bold flex">{skills.name}</div>
                    </div>
                    <span>{skills.bar}</span>
                  </div>
                </>
              ))}

              {/* <div className="bar flex">
                <div className="bar fill" style={{ width: "90%" }}>
                  <div className="tag bold flex">HTML</div>
                </div>
                <span>90%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{ width: "90%" }}>
                  <div className="tag bold flex">CSS</div>
                </div>
                <span>90%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{ width: "80%" }}>
                  <div className="tag bold flex">JavaScript</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{ width: "80%" }}>
                  <div className="tag bold flex">React</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{ width: "65%" }}>
                  <div className="tag bold flex">Node.js</div>
                </div>
                <span>65%</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// }
export default aboutMe;
