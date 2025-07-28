def findMatches(lines)
  word_to_digit = {
    "zero" => 0, "one" => 1, "two" => 2, "three" => 3, "four" => 4,
    "five" => 5, "six" => 6, "seven" => 7, "eight" => 8, "nine" => 9
  }

  first_num = nil 
  last_num = nil 
  total = 0
  
  lines.each do |line|
    matches = line.scan(/(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/i).flatten
    if matches.any?
      digits = matches.map { |m| word_to_digit[m.downcase] || m.to_i }
      puts "#{digits} \n"
      total += "#{digits.first}#{digits.last}".to_i
      puts "#{digits.first}#{digits.last} finished line total"
    end
  end
  return total 
end

lines = [] 
File.foreach("input.txt") { |line| lines.push(line) }
total = findMatches(lines)
puts total
