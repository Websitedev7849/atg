import addMember from "../images/add member.svg";

const PostCategory = () => {
  return(
      <div className="container-fluid d-flex px-xl-5 justify-conent-between">
         <div className="container-fluid h-100 d-flex justify-content-between justify-content-sm-start postCategory">
          <a className="h5 my-3 mx-3 catLink text-dark" href="/all-post"> Posts(368) </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" href="/article"> Article </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" href="/event"> Event </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" href="/education"> Education </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" href="/job"> Job </a>



          <div className="dropdown my-2 d-sm-none filter">
            <button className="btn btn-secondary dropdown-toggle text-dark filterBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Filter: All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="/">Article</a></li>
              <li><a className="dropdown-item" href="/">Event</a></li>
              <li><a className="dropdown-item" href="/">Education</a></li>
              <li><a className="dropdown-item" href="/">Job</a></li>
            </ul>
          </div>
        
        </div>

        <div className="justify-self-end mx-2 d-none d-md-inline">
          <div className="dropdown my-2 filter">
            <button className="btn btn-secondary dropdown-toggle text-dark filterBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Write a Post
            </button>
          </div>
        </div>

        <button type="button" style={{width: "9rem", height:"2.5rem"}} className="btn btn-primary my-2 mx-2 d-none d-md-inline join-group">
          <img src={addMember} style={{ height: "1.2rem", width: "1.2rem", marginRight: "5px" }} alt="add member" />
          <span style={{ fontSize: "12px" }}>Join Group</span>
        </button>
      </div>
  )
}

export default PostCategory;