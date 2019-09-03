
module Persistable
  module ClassMethods
    ALL = []

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
    extend Persistable::ClassMethods
    include Persistable::InstanceMethods
end
