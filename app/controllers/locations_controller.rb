class LocationsController < ApplicationController

before_action :set_trip
before_action :set_location, only: [:show, :edit, :update, :destroy]
#crud
#read

  def index
    @locations = @trip.locations
    render component: "Locations", props: { locations: @locations, trips: @trips }
  end

  def show
    #grabs individual
    render component: "Location", props: { location: @location, trip: @trip }
  end

#create/post
  def new
    @location = @trip.locations.new
    render component: "LocationNew", props: { location: @location, trip: @trip }
  end

  def create
    @location = @trip.locations.new(location_params)
    if @location.save
      #fix these routes later
      redirect_to root_path
    else
     render component: "LocationNew", props: { location: @location, trip: @trip } 
    end
  end

  #update
  def edit
    render component: "LocationEdit", props: { location: @location, trip: @trip }
  end
  
  def update
    if @location.update(location_params)
      redirect_to root_path
    else
      render component: "LocationEdit", props: { location: @location, trip: @trip}
    end
  end

#delete
  def destroy
    @location.destroy
    redirect_to root_path
  end

  private 

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def set_location
    @location = Location.find(params[:id])
  end

  def _params
    params.require(:location).permit(:l_name)
  end
end
