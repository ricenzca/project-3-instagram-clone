class PostsController < ApplicationController

  def index
    if current_user != nil
      following = Relationship.select("followed_id").where(follower_id: current_user.id )

      puts "FOLLOWING!!"
      p following
      puts "current_user"
      p current_user

      arr = following.map do |item|
        item.followed_id
      end

      @posts = Post.where(user_id: arr).order(created_at: :desc)

      puts "@posts"
      p @posts
      @java = "./post-index/post-index.js"
    end
  end

  def search
    if params[:query].blank?
      redirect_to(root_path, alert: "Empty field!") and return
    else
      @parameter = params[:query].downcase
      @results = User.where("lower(username) LIKE :query OR lower(name) LIKE :query" , query: "%#{@parameter}%").order(username: :asc).uniq
      render json: @results.to_json
    end
  end

  def show
    @post = Post.find(params[:id])

    puts "current_user"
    p current_user
  end

#   def edit
#     @post = Post.find(params[:id])
#   end

  def create
  	puts "media id",:media_id
  	if params[:media_id].present?
  	  preloaded = Cloudinary::PreloadedFile.new(params[:media_id])
  	  raise "Invalid upload signature" if !preloaded.valid?
      puts preloaded
  	  params[:post][:public_id]=preloaded.public_id
      params[:post][:media_type]=preloaded.resource_type
      p post_params
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
    params.require(:post).permit(:media_type, :user_id, :public_id, :caption, :method)
  end

end