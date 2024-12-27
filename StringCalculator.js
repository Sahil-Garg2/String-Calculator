function add(numbers) {
  if (!numbers) return 0;
  return parseInt(numbers);
}

// Test Case
console.assert(add("") === 0, "Test Failed: Empty string should return 0");
console.assert(add("1") === 1, "Test Failed: '1' should return 1");
console.assert(add("5") === 5, "Test Failed: '5' should return 5");
