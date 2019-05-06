class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def store

  end

end