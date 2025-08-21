function greet(name) {
  return `Hello, ${name}!`;
}

// Export the function so it can be required in other files
module.exports = greet;

// If run directly, print output (useful for debugging)
//if (require.main === module) {
 // console.log(greet("World"));
//}
