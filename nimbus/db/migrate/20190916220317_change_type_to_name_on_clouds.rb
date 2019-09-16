class ChangeTypeToNameOnClouds < ActiveRecord::Migration
  def change
    rename_column :clouds, :type, :name
  end
end
