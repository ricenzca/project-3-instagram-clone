class UsersController < ApplicationController

  before_action :user_signed_in?, only: [:index, :edit, :update, :destroy,
                                        :following, :followers]
  before_action :admin_user,     only: :destroy

  def index
    @users = User.paginate(page: params[:page])
  end

  def show
    @user = User.find(params[:id])
    @posts = Post.where(user_id: params[:id]).order(created_at: :desc)
    @avatar = current_user.avatar
  end

  def new
  end

  def edit
    @user = User.find(params[:id])
    @avatar = current_user.avatar
  end

  def update
    current_user.update(user_params)
    redirect_to current_user
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end

  def following
    @title = "Following"
    @user  = User.find(params[:id])
    @users = @user.following.paginate(page: params[:page])
    render 'show_follow'
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers.paginate(page: params[:page])
    render 'show_follow'
  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :website,
                                 :bio, :email, :phone, :gender)
  end

  def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless @user == current_user
  end

  def admin_user
    redirect_to(root_url) unless current_user.admin?
  end
end