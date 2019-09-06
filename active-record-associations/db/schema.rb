# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_06_152509) do

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.float "avg_rating"
    t.integer "years"
  end

  create_table "passengers", force: :cascade do |t|
    t.string "name"
    t.float "avg_rating"
  end

  create_table "payment_methods", force: :cascade do |t|
    t.string "type"
    t.integer "passenger_id"
    t.string "acct_number"
  end

  create_table "rides", force: :cascade do |t|
    t.date "date"
    t.integer "driver_id"
    t.integer "passenger_id"
    t.float "cost"
    t.float "distance"
    t.integer "driver_rating"
    t.integer "passenger_rating"
  end

end
