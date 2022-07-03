# score-answers

This function compares an array of correct answers to an array of attempted answers and awards or subtracts points accordingly.
Assuming both arrays are the same length of at least 1, this function returns the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and nothing for each blank answer, represented as an empty string.
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"], while the second one contains a student's submitted answers.

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])  // 6

checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])  // 7

checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])  // 16

checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])  // 0
