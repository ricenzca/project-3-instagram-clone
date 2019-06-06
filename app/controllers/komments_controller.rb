class KommentsController < ApplicationController

  def create
    puts "post_params"
    p post_params

    Komment.create(post_params)

    redirect_to root_path
  end

  private

  def post_params
    params.require(:komment).permit(:komment, :user_id, :post_id)
  end

end