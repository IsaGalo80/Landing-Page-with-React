import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const Navbar = () => {
	return (
        
<nav class="navbar navbar-expand-lg bg-black">
    <div className="container pb-1 ">
        <div className = "row">
        <div className="col-8 ">
            <div class="container-fluid">
            <a class="navbar-brand text-light" href="#"><h4>Start Bootrtrap</h4></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    <div className="col-4 position-relative position-absolute top-0 end-0 ">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#"><h5>Home</h5></a>
        </li>
        <li class="nav-item">
          <p class="nav-link text-light" >About</p>
        </li>
        <li class="nav-item">
          <p class="nav-link text-light">Service</p>
        </li>
        <li class="nav-item">
          <p class="nav-link disabled text-light">Contac</p>
        </li>
      </ul>
    </div>
  </div>
  </div>
</div>
    </div>
</nav>
	);
};
export default Navbar;