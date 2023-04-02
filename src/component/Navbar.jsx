function Navbar() {
  return (
    <><nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngdownload.id%2Fpng-lhrjej%2F&psig=AOvVaw0HvgG3pU_u-Xi6txFbGLIl&ust=1680508570933000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICjzrbciv4CFQAAAAAdAAAAABAD"
          class="rounded"
          alt="AMIKOM" />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                Contact
              </a>
            </li>
          </ul>
          <form class="d-flex">
            {/* <input class="form-control me-2" type="text" placeholder="Search" /> */}
            <button class="btn btn-primary" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav><div class="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div><div class="container mt-5">
        <div class="row">
          <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div></>
  );
}
export default Navbar;
