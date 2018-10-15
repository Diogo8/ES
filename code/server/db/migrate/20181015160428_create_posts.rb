class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user, index: true
      t.text :content
      t.timestamps
    end

    create_table :interests_posts, id: false do |t|
      t.belongs_to :post, index: true
      t.belongs_to :interest, index: true
    end

  end
end
