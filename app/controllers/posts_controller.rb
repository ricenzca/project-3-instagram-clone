class PostsController < ApplicationController

  def index
    # @posts = Post.all
    # @videos = Video.all

    # if request.query_parameters[:order] === "desc"
    #   @posts = Post.order(created_at: :desc)
    # else
      @posts = Post.all
    # end

  end

  def show
    @post = Post.find(params[:id])
  end

#   def edit
#     @post = Post.find(params[:id])
#   end

  def create
    if params[:image_id].present?
      preloaded = Cloudinary::PreloadedFile.new(params[:image_id])
      raise "Invalid upload signature" if !preloaded.valid?

      # puts "preloaded identifier",preloaded.identifier
      # puts "PARAMS POST", params[:post]

      params[:post][:image_id] = preloaded.public_id
      params[:post][:media_type] = preloaded.resource_type

      # puts "PARAMS POST2", params[:post]

      Post.create(post_params)

      redirect_to root_path

    end

    # if !params[:image_id].present?
    #  puts "no image id"
    # end



  end

  # def create
  # 	Post.create(post_params)
  #   puts "hello papaya"

  #   if params[:image_id].present?
  #     puts params[:image_id]
  #     preloaded = Cloudinary::PreloadedFile.new(params[:image_id])
  #     raise "Invalid upload signature" if !preloaded.valid?
  #     @model.image_id = preloaded.identifier
  #   end

  #   if !params[:image_id].present?
  #     puts "no image id"
  #   end

  # 	redirect_to root_path
  # end

#   def update
#     @post = Post.find(params[:id])

#     @post.update(post_params)
#     redirect_to @post
#   end

#   def destroy
#     @post = Post.find(params[:id])
#     @post.destroy

#     redirect_to root_path
#   end

  private

  def post_params
    params.require(:post).permit(:media_type, :user_id, :image_id)
  end

end