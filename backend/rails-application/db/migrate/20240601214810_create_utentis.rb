class CreateUtentis < ActiveRecord::Migration[7.1]
  def change
    create_table :utentis do |t|
      t.string :username
      t.string :password
      t.string :nome
      t.string :cognome
      t.date :data_nascita

      t.timestamps
    end
  end
end
