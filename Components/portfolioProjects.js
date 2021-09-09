import Projectdata from "../yourData";
function portfolioProjects() {
  return (
    <div className="portfolioProjects">
      <section className="flex" id="portfolio" style={{ color: "#616161" }}>
        <div className="header waypoint" data-animation="slide-in-right">
          PROJECTS
        </div>
        <div
          className="header-bar waypoint"
          data-animation="slide-in-right"
          data-delay=".3s"
        ></div>

        <div className="filter-wrap waypoint" data-animation="fade-in">
          {Projectdata.folioProjects.map((folioProjects, index) => (
            <>
              <div className="flex row" key={index}>
                <div className="filter" data-filter="{folioProjects.filter}">
                  {folioProjects.head}
                </div>
              </div>
              <div className="float-bar">
                <div className="flex row">
                  <div className="filter" data-filter="{folioProjects.filter}">
                    {folioProjects.head}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div id="gallery" className="container flex row wrap waypoint">
          {/*  */}
          {Projectdata.folioProjects.map((folioProjects, index) => (
            <>
              <div className="mix react" data-my-order="1" key={index}>
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">{folioProjects.title}</div>
                    <span className="highlight">{folioProjects.lang} </span>
                  </div>
                  <div className="button" id="todoapp">
                    {folioProjects.btnurl}
                  </div>
                </div>
              </div>
            </>
          ))}
          {/*  */}
        </div>
      </section>
    </div>
  );
}
export default portfolioProjects;
