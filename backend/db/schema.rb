# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_28_000905) do

  create_table "answers", force: :cascade do |t|
    t.string "item"
    t.integer "question_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "item"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "question_categories", force: :cascade do |t|
    t.integer "question_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_question_categories_on_category_id"
    t.index ["question_id"], name: "index_question_categories_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "item"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ranks", force: :cascade do |t|
    t.string "likes"
    t.string "dislikes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "representatives", force: :cascade do |t|
    t.string "name"
    t.string "district"
    t.string "party"
    t.integer "state_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_id"], name: "index_representatives_on_state_id"
  end

  create_table "senators", force: :cascade do |t|
    t.string "name"
    t.string "party"
    t.integer "state_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["state_id"], name: "index_senators_on_state_id"
  end

  create_table "states", force: :cascade do |t|
    t.string "name"
    t.string "capital"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "governor"
    t.string "covid_url"
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "question_categories", "categories"
  add_foreign_key "question_categories", "questions"
  add_foreign_key "representatives", "states"
  add_foreign_key "senators", "states"
end
