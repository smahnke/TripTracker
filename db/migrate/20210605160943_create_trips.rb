class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :duration
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
