class UsersController < ApplicationController
  skip_before_action :doorkeeper_authorize!, only: [:create]

  def create
    params = user_params
    @user = User.new(params.except(:interests))

    if @user.save
      @user.create_interests(params)
      render json: @user.info
    else
      render json: @user.errors
    end
  end

  def update
    params = user_params
    user = current_resource_owner
    if user.update_attributes(params.except(:interests))
      user.create_interests(params)
      render json: user.info
    else
      render json: user.errors
    end
  end

  def show
    render json: current_resource_owner.info
  end

  def index
    @users = User.all
    render json: @users.attributes.map {|u| u.info}
  end

  private

  def user_params
    params.permit(
      :username,
      :name,
      :password,
      :email,
      :description,
      :orcid,
      :research_area,
      :institution,
      :avatar,
      interests: [])
  end
end
