function checkExam(array1, array2) {
    let total = 0
    for (let ans = 0; ans < array1.length; ans++) {
      if (array1[ans] === "" || array2[ans] === "") {
        continue
      }
      else if (array1[ans] != array2[ans]) {
        total -= 1
      }
      else if (array1[ans] == array2[ans]) {
        total += 4
      }
    }
    return total < 0 ? 0 : total
  }
  
  console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))  // 6
  console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))  // 7
  console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))  // 16
  console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))  // 0