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
  	puts "media id",:media_id
  	if params[:media_id].present?
  	  puts "checking"
  	  preloaded = Cloudinary::PreloadedFile.new(params[:media_id])         
  	  puts "create instance"
  	  raise "Invalid upload signature" if !preloaded.valid?
  	  puts "PARAMS"
  	  p params
  	  puts "PRELOADED"
  	  p preloaded
  	  puts "public id", preloaded.public_id
  	  puts "public resource_type", preloaded.resource_type
  	  puts "PARAMS POST", params[:post]
  	  params[:post][:image_id]=preloaded.identifier
  	  puts "PARAMS POST2", params[:post]
  	  Post.create(post_params)

  	  redirect_to root_path
  	end
  end

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