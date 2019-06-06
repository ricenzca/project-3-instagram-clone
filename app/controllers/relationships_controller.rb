class RelationshipsController < ApplicationController
  before_action :user_signed_in?

  def create
    user = User.find(params[:followed_id])
    current_user.follow(user)
    puts "params"
    p params
    if params["relationship"]
      redirect_back(fallback_location: user)
    else 
      redirect_to user
    end
  end

  def destroy
    user = Relationship.find(params[:id]).followed
    current_user.unfollow(user)
    puts "params"
    p params
    if params["relationship"]
      redirect_back(fallback_location: user)
    else 
      redirect_to user
    end
  end
end