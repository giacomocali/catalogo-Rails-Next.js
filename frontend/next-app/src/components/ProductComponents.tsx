import { sendUpdateProduct } from "@/app/productsview/sendUpdateProduct";

var currentProduct = {
  id: "",
  tipo_prodotto_id: "",
  nome_oggetto: "",
  descrizione: "",
};

function editProduct(product) {
  currentProduct = product;
}

export function ProductRow({ product, removeProduct, showEditDialog }) {
  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.tipo_prodotto_id}</td>
      <td>{product.nome_oggetto}</td>
      <td>{product.descrizione}</td>
      <td>{product.created_at}</td>
      <td>{product.updated_at}</td>
      <td className="d-flex">
        <button
          type="button"
          className="btn btn-primary mx-1 rounded-3"
          onClick={() => {
            editProduct(product);
            showEditDialog(true);
          }}
        >
          Modifica
        </button>

        <button
          type="button"
          className="btn btn-danger dropdown-toggle mx-1 rounded-3"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rimuovi
        </button>
        <div className="dropdown-menu">
          <div className="link-list-wrapper">
            <ul className="link-list">
              <li key={product.id}>
                <button
                  className="dropdown-item list-item"
                  onClick={() => removeProduct(product.id)}
                >
                  <span>Conferma</span>
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
                  <a
                    className="it-opener d-lg-none"
                    data-bs-toggle="collapse"
                    href="#menu1b"
                    role="button"
                    aria-expanded="false"
                    aria-controls="menu4"
                  >
                    <span>Ente appartenenza</span>
                    <svg className="icon" aria-hidden="true">
                      <use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div className="link-list-wrapper collapse" id="menu1b">
                    <ul className="link-list">
                      <li>
                        <a className="list-item" href="/usersview">
                          {" "}
                          Utenti{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-item active"
                          href="#"
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



export function editProductForm(showEditDialog) {
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
        <form
          action={(fd: FormData) => {
            sendUpdateProduct(fd, currentProduct.id);
            showEditDialog(false);
            location.reload();
          }}
          className="mw-50 shadow p-4 rounded-4"
        >
          <h5 className="text-center my-4">Aggiorna i dati dell'utente:</h5>
          <div className="form-group">
            <UpdateProductInput
              type={"text"}
              identifier={"nome_oggetto"}
              label={"Nome oggetto"}
              value={currentProduct.nome_oggetto}
            />
            <UpdateProductInput
              type={"text"}
              identifier={"descrizione"}
              label={"Descrizione"}
              value={currentProduct.descrizione}
            />
            <UpdateProductInput
              type={"number"}
              identifier={"tipo_prodotto_id"}
              label={"Id tipo prodotto"}
              value={currentProduct.tipo_prodotto_id}
            />
            
          </div>
          <button type="submit" className="btn btn-primary mx-2 rounded-3">
            Invia
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-2 rounded-3"
            onClick={() => showEditDialog(false)}
          >
            Indietro
          </button>
        </form>
      </div>
    </>
  );
}

export function UpdateProductInput({ type, identifier, label, value }) {
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
