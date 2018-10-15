class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :avatar
      t.string :description
      t.string :email
      t.string :institution
      t.string :name
      t.string :orcid
      t.string :password_digest
      t.string :research_area
      t.string :username
      t.timestamps
    end

    create_table :interests do |t|
      t.string :hashtag, unique: true
      t.timestamps
    end

    create_table :interests_users, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :interest, index: true
    end

    add_index :interests_users, [:user_id, :interest_id], unique: true
  end
end
