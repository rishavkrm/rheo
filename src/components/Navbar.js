import bannerImage from './../banner.jpg'
export default function Navbar() {
  return (
    <>
      <nav style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <img
              src={bannerImage}
              className="img-fluid"
              alt=""
              style={{width:'100vw'}}
            />
          </div>


          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
              {/* <a className="nav-link disabled">Disabled</a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
