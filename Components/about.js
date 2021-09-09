import data from "../yourData";

// function about(props) {
const about = () => {
  return (
    <div>
      <section id="about" style={{ color: "#616161" }}>
        <div className="container flex">
          <div className="header waypoint" data-animation="slide-in-left">
            ABOUT
          </div>
          <div
            className="header-bar waypoint"
            data-animation="slide-in-left"
            data-delay=".5s"
          ></div>

          <div className="flex row label-wrap">
            {/* new row 1 */}
            <div className="flex row-gt-sm">
              {/*  */}
              <div className="flex bullet-wrap ">
                {data.about.map((about, index) => (
                  <>
                    <div
                      className="hex-wrap waypoint"
                      data-animation="flip-in-x"
                    >
                      <div className="hexagon">{about.icon}</div>
                    </div>
                    <div className="waypoint" data-animation="fade-in">
                      <div className="label bold" key={index}>
                        {about.title}
                      </div>
                      <div>{about.para}</div>
                    </div>
                  </>
                ))}
              </div>
              {/*  */}
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default about;
