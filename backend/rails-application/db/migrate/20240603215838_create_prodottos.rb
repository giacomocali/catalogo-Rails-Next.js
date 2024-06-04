class CreateProdottos < ActiveRecord::Migration[7.1]
  def change
    create_table :prodottos do |t|
      t.string :nome_oggetto, null: false
      t.text :descrizione
      t.references :tipo_prodotto, null: false, foreign_key: true

      t.timestamps
    end
  end
end
