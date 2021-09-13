import viewsSVG from "../images/views.svg";
import shareSVG from "../images/share.svg";
import moreOption from "../images/more options.svg";


const PostBody = (prop) => {
 
  const { post, cardTitle, article, textMuted, personPhoto, name, views} = prop.info;
   
  return (
        
    <div className="card my-4 mx-xl-5 d-inline-flex">
        <img src={post} className="card-img-top" alt="post 1" />
        <div className="card-body position-relative">
            <h5 className="card-title py-2 small">{cardTitle}</h5>
            <p className="card-text bold">
                <strong className="text-break"> {article} </strong>
                <br />
                <span className="text-muted">{textMuted}</span>
            </p>

            <img className="position-absolute py-2 moreOptions" src={moreOption} alt="more options"/>

            <div className="bottom">
              <img src={personPhoto} alt="person 1" />
              <p className="lead fs-6 px-2 py-sm-2 name"> {name} </p>
              <p className="text-muted px-2 py-sm-2 views">
                <img src={viewsSVG} className="d-none d-sm-inline" alt="views"/>
                <span className="px-sm-1">{views}</span>
              </p>
              <button type="button" style={{ background: "#F1F3F5" }} className="btn btn-light shareBtn">
                <img src={shareSVG} alt="share"  />
                <span className="fs-6 px-1 px-sm-2 fw-lighter d-sm-none">Share</span>
              </button>
            </div>

        </div>
    </div>
  )
}

export default PostBody