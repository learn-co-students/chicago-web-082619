class Cloud < ActiveRecord::Base
  def self.total_cloud_count
    self.all.count
  end

  def self.word_for_clouds
    if total_cloud_count == 1
      return "cloud"
    end
    "clouds"
  end
end
