# def choose
# 	puts "Do you like programming? Yes or no please."
# 	choice = gets.chomp
# 	if(choice.downcase == "yes")
# 		puts "that\'s great"
# 	elsif(choice.downcase =="no")
# 		puts "that\'s too bad"
# 	else
# 		puts "thats wasn\'t a valid answer"
# 	end
# end
def choose
	puts "Do you like programming? Yes or no please."
	choice = gets.chomp
	case choice.downcase
	when "yes"
		puts "that\'s great"
	when "no"
		puts "that\'s too bad"
	when "maybe"
		puts "glad you are giving it a chance!"
	else
		puts "I have no idea what that means"
	end
end
choose