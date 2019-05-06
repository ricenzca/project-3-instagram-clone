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

  def new
  end

#   def edit
#     @post = Post.find(params[:id])
#   end

#   def create
#     # render plain: params[:post].inspect
#     @post = Post.new(post_params)

#     @post.save
#     redirect_to @post
#   end

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

  def storeNew
    # Cloudinary::Uploader.upload('')

    puts "hello banana"
    if params[:image_id].present?
      puts :image_id
      # preloaded = Cloudinary::PreloadedFile.new(params[:image_id])
      # raise "Invalid upload signature" if !preloaded.valid?
      # @model.image_id = preloaded.identifier
    end
  end
  
  private

  def post_params
    params.require(:post).permit(:author_name, :media, :title, :caption, :type_of)
  end

end