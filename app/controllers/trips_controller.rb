class TripsController < ApplicationController
  before_action :set_user
  before_action :set_trip, only: [:show, :edit, :update, :destroy]

  def index
    @trips = @user.trips
    render component: 'Trips', props: {trips: @trips, user: @user}
  end

  def show
    render component: 'Trip', props: {trip: @trip, user: @user}
  end

  def new
    @trip = @user.trips.new
    render component: 'TripNew', props: {trip: @trip, user: @user}
  end

  def create
    @trip = @user.trips.new(trip_params)
    if @trip.save
      redirect_to @user
    else
      render component: 'TripNew', props: {trip: @trip, user: @user}
    end
  end

  def edit
    render component: 'TripEdit', props: {trip: @trip, user: @user}
  end

  def update
    if @trip.update(trip_params)
      redirect_to [@user, @trip]
    else
      render component: 'TripUpdate', props: {trip: @trip, user: @user}
    end
  end

  def destroy
    @trip.destroy
    redirect_to @user
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end

    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :duration)
    end
end

