# frozen_string_literal: true

require "file_size_validator"

class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :folders
  has_many :bookmarks, through: :folders
  has_and_belongs_to_many :interests

  validates_presence_of :username, :email, :name, :orcid, :research_area, :institution, :twitter_user_id
  validates_uniqueness_of :username, :email, :orcid
  validates :avatar, file_size: { maximum: 2.megabytes }

  mount_uploader :avatar, AvatarUploader

  def info
    as_json(
      except: [:password_digest, :avatar],
      include: [:interests, {
        avatar: {
          only: :url
        }
      }])
  end
end
