function add(numbers) {
  if (!numbers) return 0;
  //By default we consider comma as delimiter
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2); // Extract the delimiter
    numbers = parts.slice(1).join("\n");
  }

   const numArray = numbers
    .replace(new RegExp(`\\${delimiter}`, "g"), ",")
    .replace(/\n/g, ",")
    .split(",")
    .map((num) => parseInt(num));

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Case
console.assert(add("") === 0, "Test Failed: Empty string should return 0");
console.assert(add("1") === 1, "Test Failed: '1' should return 1");
console.assert(add("5") === 5, "Test Failed: '5' should return 5");
console.assert(add("1,2") === 3, "Test Failed: '1,2' should return 3");
console.assert(add("4,5") === 9, "Test Failed: '4,5' should return 9");
console.assert(add("1\n2,3") === 6, "Test Failed: '1\\n2,3' should return 6");
console.assert(add("4\n5\n6") === 15, "Test Failed: '4\\n5\\n6' should return 15");
console.assert(add("//;\n1;2") === 3, "Test Failed: '//;\\n1;2' should return 3");
console.assert(add("//|\n4|5|6") === 15, "Test Failed: '//|\\n4|5|6' should return 15");

try {
  add("1,-2,3,-4");
} catch (e) {
  console.assert(
    e.message === "Negative numbers not allowed: -2,-4",
    "Test Failed: Negative numbers exception not handled correctly"
  );
}
