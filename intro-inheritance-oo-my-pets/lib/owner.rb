
module Persistable
  module ClassMethods

    def self.all
      self::ALL
    end
  end

  module InstanceMethods
    def say_hi
      puts "Hello!"
    end
  end
end

class Owner
    ALL = []

    extend Persistable::ClassMethods
    include Persistable::InstanceMethods
end
