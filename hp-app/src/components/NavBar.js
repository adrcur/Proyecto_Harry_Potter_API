
function NavBar() {
  return (
    <>
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Breaking Bad</h3>

          <nav class="nav nav-masthead justify-content-center float-md-end">
            <div class="form-outline form-white mb-2">
              {/* <input type="busqueda" id="bsc" class="form-control form-control-lg" /> */}
              <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            </div>
            <a class="nav-link" onclick="" id="men3" href="#">Buscar</a>

            <a class="nav-link" onclick="" id="men2" href="#">Personajes</a>

            <a class="nav-link active" aria-current="page" onclick="" id="men1"
              href="#">Inicio</a>
          </nav>
        </div>
      </header>
    </>
  );
}


export default NavBar;
