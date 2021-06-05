class AddressesController < ApplicationController
  before_action :set_location
  before_action :set_address, only: [:show, :edit, :update, :destroy]
#crud
#read

  def index
    @addresses = @location.addresses
    render component: "Addresses", props: { addresses: @addresses, location: @location }
  end

  def show
    #grabs individual
    render component: "Address", props: { address: @address, location: @location }
  end

#create/post
  def new
    @address = @location.addresses.new
    render component: "AddressNew", props: { address: @address, location: @location }
  end

  def create
    @address = @location.addresses.new(address_params)
    if @address.save
      redirect_to root_path
    else
     render component: "AddressNew", props: {address: @address, location: @location} 
    end
  end

  #update
  def edit
    render component: "AddressEdit", props: { address: @address, location: @location}
  end
  
  def update
    if @address.update(address_params)
      redirect_to root_path
    else
      render component: "AddressEdit", props: { address: @address, location: @location}
    end
  end

#delete
  def destroy
    @address.destroy
    #do a new route later
    redirect_to root_path
  end

  private 

  def set_location
    @location = Location.find(params[:location_id])
  end

  def set_address
    @address = Address.find(params[:id])
  end

  def address_params
    params.require(:address).permit(:address )
  end
end
