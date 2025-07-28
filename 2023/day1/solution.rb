def findMatches(lines)
  first_num = nil 
  last_num = nil 
  total = 0

  lines.each do |line|
    line.each_char do |char|
      next unless char.match(/[0-9]/)
      digit = char.to_i 
      first_num ||= digit
      last_num = digit
    end
    if first_num and last_num
      total += "#{first_num}#{last_num}".to_i
    else
      total += "#{first_num}#{first_num}".to_i
    end
    first_num = nil
  end
  return total 
end

lines = [] 
File.foreach("input.txt") { |line| lines.push(line) }
total = findMatches(lines)
puts total
