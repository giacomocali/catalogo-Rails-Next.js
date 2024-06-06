export function UserRow({ user, removeUser }) {
  return (
    <>
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.nome}</td>
        <td>{user.cognome}</td>
        <td>{user.username}</td>
        <td> {user.data_nascita} </td>
        <td className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mx-1"
          >
            Modifica
          </button>
          <button
            type="button"
            className="btn btn-danger mx-1 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Rimuovi
          </button>
          <div className="dropdown-menu">
            <div className="link-list-wrapper">
              <ul className="link-list">
                <li>
                  <button className="dropdown-item list-item" onClick={()=>removeUser(user.id)}>
                    <span> Conferma </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export function Header() {
  return (
    <div className="it-header-slim-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-header-slim-wrapper-content">
              <a className="d-none d-lg-block navbar-brand" href="#">
                Progetto web di prova - Eramus s.r.l.
              </a>
              <div className="nav-mobile">
                <nav aria-label="Navigazione accessoria">
                  <div className="link-list-wrapper collapse" id="menu1b">
                    <ul className="link-list">
                      <li>
                        <a className="list-item active" href="#">
                          {" "}
                          Utenti{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item"
                          href="/productsview"
                          aria-current="page"
                        >
                          {" "}
                          Prodotti{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="it-header-slim-right-zone">
                <div className="it-access-top-wrapper">
                  <a className="btn btn-primary" href="/">
                    {" "}
                    Logout ↦{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
