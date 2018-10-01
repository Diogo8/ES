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
      t.string :hashtag
      t.belongs_to :user
      t.timestamps
    end
  end
end
