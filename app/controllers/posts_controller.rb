class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

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

  def new
    puts "hello banana222"
  end



  # private
  #   def article_params
  #     params.require(:article).permit(:title, :text)
  #   end

end