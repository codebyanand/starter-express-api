<?
function solve_sudoku($puzzle)
{
    // Check if the puzzle is valid
    if (!is_valid_sudoku($puzzle)) {
        return false;
    }

    // Copy the puzzle so we don't modify the original
    $board = $puzzle;

    // Use a backtracking algorithm to solve the puzzle
    if (solve_helper($board)) {
        return $board;
    } else {
        return false;
    }
}

function solve_helper(&$board)
{
    // Find the first empty cell
    $empty_cell = find_empty_cell($board);

    // If there are no empty cells, the puzzle is solved
    if (!$empty_cell) {
        return true;
    }

    // Try each number in the empty cell
    for ($i = 1; $i <= 9; $i++) {
        if (is_valid_move($board, $empty_cell['row'], $empty_cell['col'], $i)) {
            $board[$empty_cell['row']][$empty_cell['col']] = $i;
            if (solve_helper($board)) {
                return true;
            }
            $board[$empty_cell['row']][$empty_cell['col']] = 0;
        }
    }

    // If none of the numbers work, backtrack
    return false;
}

function find_empty_cell($board)
{
    for ($row = 0; $row < 9; $row++) {
        for ($col = 0; $col < 9; $col++) {
            if ($board[$row][$col] == 0) {
                return array('row' => $row, 'col' => $col);
            }
        }
    }
    return false;
}

function is_valid_move($board, $row, $col, $num)
{
    // Check the row and column for duplicates
    for ($i = 0; $i < 9; $i++) {
        if ($board[$row][$i] == $num || $board[$i][$col] == $num) {
            return false;
        }
    }

    // Check the 3x3 box for duplicates
    $box_row = floor($row / 3) * 3;
    $box_col = floor($col / 3) * 3;
    for ($i = 0; $i < 3; $i++) {
        for ($j = 0; $j < 3; $j++) {
            if ($board[$box_row + $i][$box_col + $j] == $num) {
                return false;
            }
        }
    }

    // If no duplicates were found, the move is valid
    return true;
}

function is_valid_sudoku($board)
{
    // Check each row and column for duplicates
    for ($i = 0; $i < 9; $i++) {
        $row_nums = array();
        $col_nums = array();
        for ($j = 0; $j < 9; $j++) {
            // Check the row for duplicates
            if ($board[$i][$j] != 0) {
                if (in_array($board[$i][$j], $row_nums)) {
                    return false;
                }
                $row_nums[] = $board[$i][$j];
            }

            // Check the column for duplicates
            if ($board[$j][$i] != 0) {
                if (in_array($board[$j][$i], $col_nums)) {
                    return false;
                }
                $col_nums[] = $board[$j][$i];
            }
        }
    }

    // Check each 3x3 box for duplicates
    for ($i = 0; $i < 9; $i += 3) {
        for ($j = 0; $j < 9; $j += 3) {
            $box_nums = array();
            for ($row = $i; $row < $i + 3; $row++) {
                for ($col = $j; $col < $j + 3; $col++) {
                    if ($board[$row][$col] != 0) {
                        if (in_array($board[$row][$col], $box_nums)) {
                            return false;
                        }
                        $box_nums[] = $board[$row][$col];
                    }
                }
            }
        }
    }

    // If no duplicates were found, the puzzle is valid
    return true;
}



$puzzle = array(
    array(5, 3, 0, 0, 7, 0, 0, 0, 0),
    array(6, 0, 0, 1, 9, 5, 0, 0, 0),
    array(0, 9, 8, 0, 0, 0, 0, 6, 0),
    array(8, 0, 0, 0, 6, 0, 0, 0, 3),
    array(4, 0, 0, 8, 0, 3, 0, 0, 1),
    array(7, 0, 0, 0, 2, 0, 0, 0, 6),
    array(0, 6, 0, 0, 0, 0, 2, 8, 0),
    array(0, 0, 0, 4, 1, 9, 0, 0, 5),
    array(0, 0, 0, 0, 8, 0, 0, 7, 9)
);

$solution = solve_sudoku($puzzle);

if ($solution) {
    echo "Solved puzzle:\n";
    print_board($solution);
} else {
    echo "Unable to solve puzzle.\n";
}

function print_board($board) {
    for ($row = 0; $row < 9; $row++) {
      for ($col = 0; $col < 9; $col++) {
        echo $board[$row][$col] . " ";
        if ($col == 2 || $col == 5) {
          echo "| ";
        }
      }
      echo "\n";
      if ($row == 2 || $row == 5) {
        echo "---------------------\n";
      }
    }
  }
  