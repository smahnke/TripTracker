class User < ApplicationRecord
  has_many :trips, dependent: :destroy

  validates :email, :password, presence: true 
end
