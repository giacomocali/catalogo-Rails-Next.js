export function Header(){
    return <div className="it-header-slim-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <a className="d-none d-lg-block navbar-brand" href="#">Progetto web di prova - Eramus s.r.l.</a>
            <div className="nav-mobile">
              <nav aria-label="Navigazione accessoria">
                <div className="link-list-wrapper collapse" id="menu1b">
                  <ul className="link-list">
                    <li><a className="list-item active" href="#"> Utenti </a></li>
                    <li><a className="list-item" href="/productsview" aria-current="page"> Prodotti </a></li>
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