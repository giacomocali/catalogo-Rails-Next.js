class Api::V1::ProdottoController < ApplicationController
    def index
        prodotti = Prodotto.all
        render json: prodotti, status: 200
    end

    def show
        prodotto = Prodotto.find_by(id: params[:id])
        if prodotto
            render json: prodotto, status: 200
        else
            render json: {
                error: "Show: Prodotto non trovato."
            }    
        end
    end

    def create
        prodotto = Prodotto.new(
            nome_oggetto: prodotto_params[:nome_oggetto],
            descrizione: prodotto_params[:descrizione],
            tipo_prodotto_id: prodotto_params[:tipo_prodotto_id]
        )
        if prodotto.save
            render json: prodotto, status: 200    
        else
            render json:{
                error: "Create: Errore nella creazione di un prodotto."
            }, status: 500
        end
    end

    def update
        prodotto = Prodotto.find_by(id: params[:id])
        if prodotto
            prodotto.update(
                nome_oggetto: params[:nome_oggetto],
                descrizione: params[:descrizione],
                tipo_prodotto_id: params[:tipo_prodotto_id]
            )
            render json: "Prodotto aggiornato con successo."
        else
            render json: {
                error: "Update: Prodotto non trovato."
            }    
        end
    end

    def destroy
        prodotto = Prodotto.find_by(id: params[:id])
        if prodotto
            prodotto.destroy
            render json: "Prodotto rimosso con successo."
        else
            render json: {
                error: "Destroy: Prodotto non trovato."
            }    
        end
    end

    def search
        render json: "Metodo search non implementato."
    end

    private def prodotto_params
        params.require(:prodotto).permit([
            :nome_oggetto,
            :descrizione,
            :tipo_prodotto_id
        ])        
    end
end
