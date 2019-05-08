class UsersController < ApplicationController

  before_action :user_signed_in?, only: [:index, :edit, :update, :destroy,
                                        :following, :followers]
  def index
    @users = User.paginate(page: params[:page])
  end

  def show
    @user = User.find(params[:id])
  end

  def new
  end

  def edit
  @user = User.find(params[:id])
  end

  def update
  current_user.update(user_params)
  redirect_to current_user
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
end