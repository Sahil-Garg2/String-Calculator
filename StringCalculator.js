function add(numbers) {
  if (!numbers) return 0;
  return parseInt(numbers);
}

// Test Case
console.assert(add("") === 0, "Test Failed: Empty string should return 0");
