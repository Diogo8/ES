class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params.except(:interests))

    if post_params["user_id"] != current_resource_owner.id
      render json: {error: "can't create posts for other users"}, status: :unauthorized
    elsif @post.save
      Interest.associate(@post, post_params["interests"])
      render json: @post.info, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.permit(:content, interests: []).merge(user_id: current_resource_owner.id)
    end
end
