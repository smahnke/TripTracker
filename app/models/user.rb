class User < ApplicationRecord
  has_many :trips, dependent: :destroy

  validates :name, :password, presence: true 
end
