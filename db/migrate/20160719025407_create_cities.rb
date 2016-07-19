class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :county_name
      t.string :state_name
      t.string :feat_class

      t.timestamps null: false
    end
  end
end
