# adding next alaphabet(concatenating)/ number(Adding) for every element in the array
def add_next
	array1 = ["f","g","h","v","b","n",4]
	array1.map!{|x| x+x.next}
	puts array1
end

# delete elements from array according the conditions given
def delete_selected
	array2 = [1,5,2,4,3,7,9,6,8]
	array2.delete_if{|x| x == 4 || x > 6} 
	puts array2
end

add_next
delete_selected