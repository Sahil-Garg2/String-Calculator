function add(numbers) {
  if (!numbers) return 0;
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

// Test Case
console.assert(add("") === 0, "Test Failed: Empty string should return 0");
console.assert(add("1") === 1, "Test Failed: '1' should return 1");
console.assert(add("5") === 5, "Test Failed: '5' should return 5");
console.assert(add("1,2") === 3, "Test Failed: '1,2' should return 3");
console.assert(add("4,5") === 9, "Test Failed: '4,5' should return 9");
