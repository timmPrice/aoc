local function openFile(filename)
    local file = io.open(filename, "r")

    if file then
        local data = file:read("*all")
        file:close()
        return data
    else
        print("failed to open file")
        return nil
    end
end

local function toArray(input)
    local myList = {}
    for line in input:gmatch("[^\r\n]+") do
        local sublist = {}
        for char in line:gmatch("%a") do
            table.insert(sublist, char) 
        end
        table.insert(myList, sublist)
    end
    return myList
end

local function checkDiagonal(list)
    local total = 0

    return total
end

local function matchString(list)
    local total = 0
    for i = 1, #list do
        for _ in string.gmatch(list[i], "XMAS") do
            total = total + 1 
        end
        for _ in string.gmatch(list[i], "SAMX") do
            total = total + 1 
        end
    end

    return total
end

local function main()
    local input = openFile("input.txt")
    local array = toArray(input)
    -- local count = matchString(array)
    -- print(count)
    for i = 1, #array do
        for j = 1, #array[i] do
            print(array[i][j])
        end
    end
end

main()
