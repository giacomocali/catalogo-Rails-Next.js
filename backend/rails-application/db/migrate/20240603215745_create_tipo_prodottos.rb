class CreateTipoProdottos < ActiveRecord::Migration[7.1]
  def change
    create_table :tipo_prodottos do |t|
      t.string :tipo, null: false # rimuovi ", null: false" se causa problemi

      t.timestamps
    end
  end
end
