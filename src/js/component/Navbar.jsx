import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const Navbar = () => {
	return (
        
<nav class="navbar navbar-expand-lg bg-light">
    <div className="container">
        <div className = "row">
        <div className="col-2">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Start Bootrtrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    <div className="col-10">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Contac</a>
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