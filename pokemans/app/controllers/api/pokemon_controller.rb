class Api::PokemonController < ApplicationController

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def edit
  end

  def update
  end

  def new
  end

  def create
  end

  def destroy
  end

end
