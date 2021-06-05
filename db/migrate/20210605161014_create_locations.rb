class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :L_name
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
