import "../styles.css";
import Blogdata from "../yourData";

function blogs() {
  return (
    <div className="blogs">
      <section id="blog" style={{ color: "#616161" }}>
        {/* <section id="blog"> */}
        <div className="container flex">
          <div className="header waypoint" data-animation="slide-in-left">
            BLOG
          </div>
          <div
            className="header-bar waypoint"
            data-animation="slide-in-left"
            data-delay=".5s"
          ></div>

          <div className="flex row wrap">
            <div className="flex row-gt-sm">
              {Blogdata.blog.map((blog, index) => (
                <>
                  <a href={blog.url}>
                    <div
                      className="blog-wrap waypoint"
                      data-animation="fade-in"
                      key={index}
                    >
                      <div className="fade-wrap">
                        <div className="thumb" id="thumb-1">
                          <img src={blog.img} />
                        </div>
                        <div className="label bold">{blog.title}</div>
                        <div className="bar"></div>
                        <div className="text">{blog.para}</div>
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default blogs;
