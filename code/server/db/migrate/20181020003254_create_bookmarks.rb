class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.string :name
      t.timestamps

      create_table :bookmarks_interests, id: false do |t|
        t.belongs_to :bookmark, index: true
        t.belongs_to :interest, index: true
      end
    end
  end
end
