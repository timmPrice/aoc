//==================
// Day 4 - AOC 2024 
// 
//==================

use std::fs;

fn to_array(input: String) -> Vec<Vec<char>>{
    input.lines().map(|line| line.chars().collect()).collect()
}

fn print_array(array: Vec<Vec<char>>) {
    for row in array {
        for col in row {
            print!("{}, ", col);
        }
        println!();
    }
}

fn check(array: &Vec<Vec<char>>, target: [char; 4]) -> i32 {
    let mut total = 0; 
    let mut row = 0;
    let mut col = 0;

    while row < array.len() {
        println!("{row}");
        while col < array[row].len() {
            if array[row][col] == target[0] {
                if check_row(&array, target, row, col) {
                    total += 1;                                
                }
                if check_col(&array, target, row, col) {
                    total += 1;                                
                }
                if check_neg_diag(&array, target, row, col) {
                    total += 1;
                }
            }
            println!("{row},{col}");
            col += 1;
        }
        row += 1;
        col = 0;
    }

    return total;

}

fn check_row(array: &Vec<Vec<char>>, target: [char; 4], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if col + ch >= array[row].len() || target[ch] != array[row][col + ch] {
            return false;
        }
    }
    return true;
}

fn check_col(array: &Vec<Vec<char>>, target: [char; 4], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if row + ch >= array.len() || target[ch] != array[row + ch][col] {
            return false;
        }
    }
    return true;
}

fn check_neg_diag(array: &Vec<Vec<char>>, target: [char; 4], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if ch + row >= array.len() || ch + col >= array[row].len() || target[ch] != array[row + ch][col + ch] {
            return false;
        }
    }
    return true; 
}

fn main() {
    let input: String = fs::read_to_string("./example.txt").expect("unable to read file");
    let array: Vec<Vec<char>> = to_array(input);
    let target: [char; 4] = ['X', 'M', 'A', 'S'];
    print_array(array.clone());
    let total = check(&array, target.clone());
    println!("the total, {}", total);
}
