require 'file_size_validator'

class User < ApplicationRecord
  has_secure_password
  has_many :interests
  validates_presence_of :username, :name, :orcid, :research_area, :institution
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

  def create_interests(params)
    interests.delete_all
    if params["interests"]
      params["interests"].each do |interest|
        interests.create(hashtag: interest)
      end
    end
  end
end
