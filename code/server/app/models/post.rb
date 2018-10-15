class Post < ApplicationRecord
  has_and_belongs_to_many :interests
  belongs_to :user

  def info
    as_json(include: [:interests, :user])
  end
end
