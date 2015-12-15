def fav_foods
	food_array=[]
	3.times do 
		puts "Name a favorite food."
		food_array << gets.chomp
	end
	p food_array
	food_array.each {|food| puts "I like #{food} too"}
	puts "Your favorite foods are #{food_array.join(", ")}."
end

fav_foods