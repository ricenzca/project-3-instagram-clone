class AvatarsController < ApplicationController

  def new
    if current_user == nil
      redirect_to root_path
    end
  end

  def create
      if current_user != nil && params[:media_id].present? && current_user.avatar == nil
        preloaded = Cloudinary::PreloadedFile.new(params[:media_id])
        raise "Invalid upload signature" if !preloaded.valid?
        puts "preloaded"
        puts preloaded.public_id

        puts "AVATAR"
        p params
        params[:avatar][:public_id] = preloaded.public_id

        puts "byebyeee"
        p avatar_params

        Avatar.create(avatar_params)

        redirect_to user_path(id = current_user.id)

      elsif current_user != nil && params[:media_id].present? && current_user.avatar != nil
        preloaded = Cloudinary::PreloadedFile.new(params[:media_id])
        raise "Invalid upload signature" if !preloaded.valid?

        params[:avatar][:public_id] = preloaded.public_id

        current_user.avatar.update({public_id: params[:avatar][:public_id]})

        redirect_to user_path(id = current_user.id)
    end
  end



  private

  def avatar_params
    params.require(:avatar).permit(:user_id, :public_id)
  end

end