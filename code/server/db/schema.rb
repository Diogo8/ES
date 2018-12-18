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

ActiveRecord::Schema.define(version: 2018_12_12_182650) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.string "title"
    t.text "url"
    t.bigint "folder_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["folder_id"], name: "index_bookmarks_on_folder_id"
  end

  create_table "bookmarks_interests", id: false, force: :cascade do |t|
    t.bigint "bookmark_id"
    t.bigint "interest_id"
    t.index ["bookmark_id"], name: "index_bookmarks_interests_on_bookmark_id"
    t.index ["interest_id"], name: "index_bookmarks_interests_on_interest_id"
  end

  create_table "folders", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_folders_on_user_id"
  end

  create_table "interests", force: :cascade do |t|
    t.string "hashtag"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests_posts", id: false, force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "interest_id"
    t.index ["interest_id"], name: "index_interests_posts_on_interest_id"
    t.index ["post_id"], name: "index_interests_posts_on_post_id"
  end

  create_table "interests_users", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "interest_id"
    t.index ["interest_id"], name: "index_interests_users_on_interest_id"
    t.index ["user_id", "interest_id"], name: "index_interests_users_on_user_id_and_interest_id", unique: true
    t.index ["user_id"], name: "index_interests_users_on_user_id"
  end

  create_table "oauth_access_tokens", force: :cascade do |t|
    t.integer "resource_owner_id"
    t.bigint "application_id"
    t.string "token", null: false
    t.string "refresh_token"
    t.integer "expires_in"
    t.datetime "revoked_at"
    t.datetime "created_at", null: false
    t.string "scopes"
    t.index ["application_id"], name: "index_oauth_access_tokens_on_application_id"
    t.index ["refresh_token"], name: "index_oauth_access_tokens_on_refresh_token", unique: true
    t.index ["resource_owner_id"], name: "index_oauth_access_tokens_on_resource_owner_id"
    t.index ["token"], name: "index_oauth_access_tokens_on_token", unique: true
  end

  create_table "orcids", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "avatar"
    t.string "description"
    t.string "email"
    t.string "institution"
    t.string "name"
    t.string "orcid"
    t.string "orcid_access_token"
    t.string "password_digest"
    t.string "research_area"
    t.string "username"
    t.string "twitter_user_id"
    t.string "twitter_oauth_token"
    t.string "twitter_oauth_token_secret"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "oauth_access_tokens", "users", column: "application_id"
end
