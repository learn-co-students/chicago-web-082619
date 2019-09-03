
module Persistable
  module ClassMethods
    ALL = []

    def self.all
      ALL
    end
  end

  module InstanceMethods
    def say_hi
      puts "Hello!"
    end
  end
end

class Owner
    include Persistable::ClassMethods
    include Persistable::InstanceMethods
end
