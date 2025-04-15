//===========================
//     Day 4 - AOC 2024 
// Trying again.. But in rust 
//   PART 2 IS SO SCUFFED!
//===========================

use std::fs;

fn to_array(input: String) -> Vec<Vec<char>>{
    input.lines().map(|line| line.chars().collect()).collect()
}

fn _print_array(array: &Vec<Vec<char>>) {
    for row in array {
        for col in row {
            print!("{}, ", col);
        }
        println!();
    }
}

// check function for part 1
fn check(array: &Vec<Vec<char>>, target: &[char]) -> i32 {
    let mut total = 0; 
    let mut row = 0;
    let mut col = 0;

    while row < array.len() {
        while col < array[row].len() {
            if array[row][col] == target[0] {
                if check_row(&array, &target, row, col) {
                    total += 1;                                
                }
                if check_col(&array, &target, row, col) {
                    total += 1;                                
                }
                if check_neg_diag(&array, &target, row, col) {
                    total += 1;
                }
                if check_pos_diag(&array, &target, row, col) {
                    total += 1;
                }
            }
            col += 1;
        }
        row += 1;
        col = 0;
    }
    return total;
}

// for part 2
fn check_mas(array: &Vec<Vec<char>>, target: &[char]) -> i32 {
    let mut total = 0;

    for row in 1..array.len() - 1 {
        for col in 1..array[row].len() - 1 {
            if array[row][col] == target[1] {
                let top_left = array[row - 1][col - 1];
                let top_right = array[row - 1][col + 1];
                let bottom_right = array[row + 1][col + 1]; 
                let bottom_left = array[row + 1][col - 1];

                if (top_left == target[0] && bottom_right == target[2]) && 
                   (top_right == target[0] && bottom_left == target[2]) {
                    total += 1; 
                } else if (top_left == target[2] && bottom_right == target[0]) &&
                          (top_right == target[0] && bottom_left == target[2]) {
                    total += 1;
                } else if (top_left == target[0] && bottom_right == target[2]) &&
                          (top_right == target[2] && bottom_left == target[0]) {
                    total += 1;
                } else if (top_left == target[2] && bottom_right == target[0]) &&
                          (top_right == target[2] && bottom_left == target[0]) {
                    total += 1;
                }
            }
        }
    }
    return total;
}

fn check_row(array: &Vec<Vec<char>>, target: &[char], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if col + ch >= array[row].len() || target[ch] != array[row][col + ch] {
            return false;
        }
    }
    return true;
}

fn check_col(array: &Vec<Vec<char>>, target: &[char], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if row + ch >= array.len() || target[ch] != array[row + ch][col] {
            return false;
        }
    }
    return true;
}

fn check_neg_diag(array: &Vec<Vec<char>>, target: &[char], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if ch + row >= array.len() || ch + col >= array[row].len() || target[ch] != array[row + ch][col + ch] {
            return false;
        }
    }
    return true; 
}

fn check_pos_diag(array: &Vec<Vec<char>>, target: &[char], row: usize, col: usize) -> bool {
    for ch in 0..target.len() {
        if row < ch || col + ch >= array[row].len() || target[ch] != array[row - ch][col + ch] {
            return false;
        }
    }
    return true;
}

fn main() {
    let input: String = fs::read_to_string("./input.txt").expect("unable to read file");
    let input: Vec<Vec<char>> = to_array(input); // shadowing is nice :)
    
    // part 1 
    let target: [char; 4] = ['X', 'M', 'A', 'S'];
    let rtarget: [char; 4] = ['S', 'A', 'M', 'X'];
    let total = check(&input, &target) + check(&input, &rtarget);
    
    // part 2
    let mas: [char; 3] = ['M', 'A', 'S'];
    let _rmas: [char; 3] = ['S', 'A', 'M'];
    let totaltwo = check_mas(&input, &mas);
    
    println!("part 1 total, {}", total);
    println!("part 2 total, {}", totaltwo);
}
