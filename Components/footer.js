import footerdata from "../yourData";
function footer() {
  return (
    <div className="footer">
      <footer>
        <i
          className="fa fa-chevron-circle-up page-link"
          aria-hidden="true"
          dest="home"
        ></i>
        <div className="icon-wrap flex row">
          {footerdata.social.map((social, index) => (
            <>
              <a href={social.url}>
                <div className="flex icon" id="icon-1" key={index}>
                  {social.icon}
                </div>
                {social.title}
              </a>
            </>
          ))}
        </div>
        <div className="info-box">
          <div className="footnote">
            {footerdata.footernoteone}{" "}
            <span className="highlight">&copy;{footerdata.footernotetwo}</span>
            {footerdata.footernotethree}
          </div>
        </div>
      </footer>
    </div>
  );
}
export default footer;
