class TipoProdotto < ApplicationRecord
    has_many :prodotti, class_name: 'Prodotto', foreign_key: 'tipo_prodotto_id'
end
