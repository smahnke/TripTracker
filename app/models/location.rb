class Location < ApplicationRecord
  belongs_to :trip

  has_many :addresses, dependent: :destroy

  validates :l_name, presence: true 
end
