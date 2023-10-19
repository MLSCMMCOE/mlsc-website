
export default function Event({ head, desc, img,linkname,link }) {
    return (
      <div className="card">
        <div className="card-photo">
          <img src={img} alt={head}  className="card-img" />
        </div>
        <div className="card-title">
          {head} <br />
          <span>{desc}</span>
        </div>
        <div className="card-socials">
        <div className="btn  bg-color-primary-blue color-white"><a style={{ textDecoration: "none",
  color: "black", color:"white"}}href={link}>{linkname}</a></div>
        </div>
      </div>
    );
  }
  