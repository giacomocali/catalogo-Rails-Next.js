import { updateUser } from "@/ApiActions";

interface userData {
  username: string;
  password: string;
  nome: string;
  cognome: string;
  data_nascita: string;
}

// function modify(user) {
//   redirect("/updateuser");
// }

var currentUser = {
  id:"",
  username: "",
  password: "",
  nome: "",
  cognome: "",
  data_nascita: "",
};

function editUser(user) {
  currentUser = user;
}

export function UserRow({ user, removeUser, f }) {
  return (
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.nome}</td>
      <td>{user.cognome}</td>
      <td>{user.username}</td>
      <td>{user.password}</td>
      <td> {user.data_nascita} </td>
      <td> {user.updated_at}</td>
      <td> {user.created_at} </td>

      <td className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary mx-1 rounded-3"
          onClick={() => {
            editUser(user);
            f(true);
          }}
        >
          Modifica
        </button>

        <button
          type="button"
          className="btn btn-danger mx-1 dropdown-toggle rounded-3"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rimuovi
        </button>
        <div className="dropdown-menu">
          <div className="link-list-wrapper">
            <ul className="link-list">
              <li key={user.id}>
                <button
                  className="dropdown-item list-item"
                  onClick={() => removeUser(user.id)}
                >
                  <span> Conferma </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
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
                    Logout ↦
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

export function UpdateUserInput({ type, identifier, label, value }) {
  return (
    <div className="mb-4">
      <p className="m-0 p-0"> {label} </p>
      <input
        type={type}
        id={identifier}
        name={identifier}
        placeholder={value}
        className="form-control shadow-sm rounded-3"
      />
    </div>
  );
}

export function editUserForm() {
  // "use client"
  // useEffect(() => {
  //   const ref = document.querySelector("#editUser");
  //   if (ref != null) {
  //     ref.scrollIntoView();
  //   }
  // }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5" id="editUser">
        <form action={(fd:FormData)=>updateUser(fd, currentUser)} className="mw-50 shadow p-4 rounded-4">
          <h5 className="text-center my-4">Aggiorna i dati dell'utente:</h5>
          <div className="form-group">
            <UpdateUserInput
              type={"text"}
              identifier={"username"}
              label={"Username"}
              value={currentUser.username}
            />
            <UpdateUserInput
              type={"password"}
              identifier={"password"}
              label={"Password"}
              value={currentUser.password}
            />
            <UpdateUserInput
              type={"text"}
              identifier={"nome"}
              label={"Nome"}
              value={currentUser.nome}
            />
            <UpdateUserInput
              type={"text"}
              identifier={"cognome"}
              label={"Cognome"}
              value={currentUser.cognome}
            />
            <UpdateUserInput
              type={"date"}
              identifier={"data_nascita"}
              label={"Data di nascita"}
              value={currentUser.data_nascita}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-2 rounded-3">
            Invia
          </button>
          <a
            type="button"
            className="btn btn-secondary mx-2 rounded-3"
            href="/usersview"
          >
            Indietro
          </a>
        </form>
      </div>
    </>
  );
}
