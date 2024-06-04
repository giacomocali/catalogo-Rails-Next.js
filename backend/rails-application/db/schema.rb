# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_03_215838) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "prodottis", force: :cascade do |t|
    t.string "nome_oggetto"
    t.text "descrizione"
    t.datetime "data_inserimento"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prodottos", force: :cascade do |t|
    t.string "nome_oggetto", null: false
    t.text "descrizione"
    t.bigint "tipo_prodotto_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tipo_prodotto_id"], name: "index_prodottos_on_tipo_prodotto_id"
  end

  create_table "tipo_prodottos", force: :cascade do |t|
    t.string "tipo", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "utentis", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "nome"
    t.string "cognome"
    t.date "data_nascita"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "prodottos", "tipo_prodottos"
end
