class Api::V1::TipoProdottoController < ApplicationController
    def index
        tipo_prodotto = TipoProdotto.all
        render json: tipo_prodotto, status: 200
    end

    def show
        tipo_prodotto = TipoProdotto.find_by(id: params[:id])
        if tipo_prodotto
            render json: tipo_prodotto, status: 200
        else
            render json: {
                error: "Show: Tipo prodotto non trovato."
            }  
        end
    end

    def create
        tipo_prodotto = TipoProdotto.new(
            tipo: tipo_prodotto_params[:tipo]  
          )
          if tipo_prodotto.save
            render json: tipo_prodotto, status: 200
          else
            render json:{
              error: "Create: Errore nella creazione di un tipo prodotto."
            }
          end
    end
    
    def update
        tipo_prodotto = TipoProdotto.find_by(id: params[:id])
        if tipo_prodotto
            tipo_prodotto.update(tipo: tipo_prodotto_params[:tipo])
            render json: "Tipo prodotto aggiornato con successo."  
        else
            render json: {
                error: "Update: Tipo prodotto non trovato."
            }
        end
    end

    def destroy
        tipo_prodotto = TipoProdotto.find_by(id: params[:id])
        if tipo_prodotto
            tipo_prodotto.destroy
            render json: "Tipo prodotto rimosso con successo."  
        else
            render json: {
                error: "Destroy: Tipo prodotto non trovato."
            }
        end
    end

    def search
        render json: "Metodo search non implementato."
    end

    private def tipo_prodotto_params
        params.require(:tipo_prodotto).permit([
            :tipo
        ])        
    end
end