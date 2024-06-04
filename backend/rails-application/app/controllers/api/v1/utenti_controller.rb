class Api::V1::UtentiController < ApplicationController
  
  def show_by_username
    logger.warn "It works!"
    utente = Utenti.find_by(username: params[:username])
    if utente
      render json: utente, status: 200
    else
      render json:{
        error:"show_by_username: Utente non trovato."
      }  
    end
  end
  
  def index
    utenti = Utenti.all
    render json: utenti, status: 200
  end

  def show
    utenti = Utenti.find_by(id: params[:id])
    if utenti
      render json: utenti, status: 200
    else
      render json: {
        error: "Show: Utente non trovato."
      }  
    end
  end
  
  def create
    utenti = Utenti.new(
      username: utenti_params[:username],
      password: utenti_params[:password],
      nome: utenti_params[:nome],
      cognome: utenti_params[:cognome],
      data_nascita: utenti_params[:data_nascita]
    )
    if utenti.save
      render json: utenti, status: 200
    else
      render json:{
        error: "Create: Errore nella creazione di un utente."
      }
    end
  end
  
  def update
    utenti = Utenti.find_by(id: params[:id])
    if utenti
      utenti.update(username: params[:username], password: params[:password], nome: params[:nome], cognome: params[:cognome], data_nascita: params[:data_nascita]);
      render json: "Utente aggiornato con successo."  
    else
      render json: {
        error: "Update: utente non trovato."
      }
    end
  end

  def destroy
    utenti = Utenti.find_by(id: params[:id])
    if utenti
      utenti.destroy
      render json: "Utente rimosso con successo."
    else
      render json: "Destroy: Utente non trovato."  
    end
  end
  
  def search
    render json: "Metodo search non implementato."
  end
  private def utenti_params
    params.require(:utenti).permit([
      :username,
      :password,
      :nome,
      :cognome,
      :data_nascita
      ])  
    
  end
end