class Address < ApplicationRecord
  belongs_to :location

  validates :address, presence: true 
end
