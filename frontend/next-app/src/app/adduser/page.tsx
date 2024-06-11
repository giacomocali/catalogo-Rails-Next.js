// INTERFACCIA DI AGGIUNTA UTENTI
import { Header } from "@/components/UserComponents";
import { createUser } from "@/ApiActions";
import { loadPageDelayed } from "@/loadPageDelayed";
import { redirect } from "next/navigation";

function passwordCheck(pass: string) {
  const regex = /^(?=.*[A-Z])(?=.*[@!()-_+:<>])(?=.{8,})/;
  return regex.test(pass);
}

async function sendCreateUser(data: FormData) {
  "use server";
  const userToSend = {
    nome: data.get("nome"),
    cognome: data.get("cognome"),
    username: data.get("username"),
    password: data.get("password"),
    data_nascita: data.get("data_nascita"),
  };
  if (!passwordCheck(userToSend.password as string)) {
    console.error("La password non rispetta i requisiti richiesti");
    return;
  }

  const success: boolean = await createUser(userToSend);
  if (success) {
    redirect("/usersview");
  } else {
    console.error("CREAZIONE UTENTE FALLITA");
  }
  // implementare alert di bootstrap per dare migliore feedback dell'esito all'utente
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <form action={sendCreateUser} className="mw-50 shadow p-4 rounded-4">
          <h5 className="text-center my-4">
            Inserisci i dati del nuovo utente:
          </h5>
          <div className="form-group">
            <AddUserInput
              type={"text"}
              identifier={"username"}
              label={"Username"}
            />
            <AddUserInput
              type={"password"}
              identifier={"password"}
              label={"Password"}
            />
            <AddUserInput type={"text"} identifier={"nome"} label={"Nome"} />
            <AddUserInput
              type={"text"}
              identifier={"cognome"}
              label={"Cognome"}
            />
            <AddUserInput
              type={"date"}
              identifier={"data_nascita"}
              label={"Data di nascita"}
            />
          </div>
          <small>
            <em>
              La password deve essere lunga almeno 8 caratteri <br /> e avere
              almeno una lettera maiuscola <br /> e un carattere speciale.
            </em>
          </small>
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

function AddUserInput({ type, identifier, label }) {
  return (
    <div className="mb-4">
      <p className="m-0 p-0"> {label} </p>
      <input
        type={type}
        id={identifier}
        name={identifier}
        placeholder={label}
        className="form-control shadow-sm rounded-3"
      />
    </div>
  );
}
