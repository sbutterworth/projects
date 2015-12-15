class Pet
	attr_reader :color, :breed
	attr_accessor :name

	def initialize(color, breed)
		@color = color
		@breed = breed
		@hungry = true
	end
	def feed(food)
		puts "Mmmm, "+food+"!"
		@hungry = false
	end
	def hungry?
		if @hungry
			puts "I am Hungry!"
		else
			puts "I am full"
		end
		@hungry
	end
end
class Cat < Pet
	def speak
		puts "Meow!"
	end
end
class Dog < Pet
	def speak
		puts "Bhow Bhow!"
	end
end
kitty=Cat.new("grey", "persian")
puts "lets inpect our new cat:"
puts kitty.inspect
puts "what class does our new cat belong to?"
puts kitty.class
puts "Is our new cat a object?"
puts kitty.is_a?(Object)
puts "What color is our cat?"
puts kitty.color
puts "Let's give our new cat a name"
kitty.name= "kit"
puts kitty.name
puts "is yout cat hungry now?"
kitty.hungry?
puts "lets feed our cat"
kitty.feed("tuna")
puts ("is your kitty hungry now?")
kitty.hungry? 
puts "our cat can make noise"
kitty.speak
ella = Dog.new("gold","Golden Retreiver")
ella.speak
puts ella.breed
