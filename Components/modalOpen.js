import "../styles.css";

function modalOpen() {
  return (
    <div className="modalOpen">
      {/* <h1>This is modalOpen Page</h1> */}
      <div className="modal-wrap flex">
        <div className="mask"></div>
        <div className="modal" id="modal">
          <div className="carousel-wrap">
            <div className="window">
              <div id="carousel">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
              </div>
              <i className="fa fa-angle-left" aria-hidden="true" id="prev"></i>
              <i className="fa fa-angle-right" aria-hidden="true" id="next"></i>
            </div>
          </div>
          <div className="info-box">
            <div className="title"></div>
            <div className="tag"></div>
            <div className="detail"></div>
            {/* <a href="#" 
      target="_blank"
        > */}
            <div className="button">
              <i className="fa fa-external-link" aria-hidden="true"></i>
              VIEW SITE
            </div>
            {/* </a> */}
          </div>
          <i className="close fa fa-times"></i>
        </div>
      </div>
    </div>
  );
}
export default modalOpen;
