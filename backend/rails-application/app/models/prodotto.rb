class Prodotto < ApplicationRecord
  belongs_to :tipo_prodotto, class_name: 'TipoProdotto'
end
