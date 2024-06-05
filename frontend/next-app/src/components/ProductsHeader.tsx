export function Header(){
    return <div className="it-header-slim-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <a className="d-none d-lg-block navbar-brand" href="#">Progetto web di prova - Eramus s.r.l.</a>
            <div className="nav-mobile">
              <nav aria-label="Navigazione accessoria">
                <a className="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1b" role="button" aria-expanded="false" aria-controls="menu4">
                  <span>Ente appartenenza</span>
                  <svg className="icon" aria-hidden="true"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
                </a>
                <div className="link-list-wrapper collapse" id="menu1b">
                  <ul className="link-list">
                    <li><a className="list-item" href="/usersview"> Utenti </a></li>
                    <li><a className="list-item active" href="#" aria-current="page"> Prodotti </a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="it-header-slim-right-zone">
              <div className="it-access-top-wrapper">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}