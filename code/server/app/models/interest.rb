# frozen_string_literal: true

class Interest < ApplicationRecord
  has_and_belongs_to_many :users
  has_and_belongs_to_many :posts

  def self.associate(model, hashtags)
    model.interests.delete_all

    interests = []
    hashtags.each do |ht|
      i = Interest.new(hashtag: ht)
      if i.save
        interests.push(i)
      else
        interests.push(Interest.find_by(hashtag: ht))
      end
    end

    interests.each do |i|
      model.interests.push(i)
    end
  end
end
