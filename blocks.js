//@@ -44,31 +44,23 @@ Step 4: Test Your Solution
class EmptyFileError extends Error {
  constructor(message = "File data cannot be empty.") {
      super(message);
      this.name = "EmptyFileError";
  }
}

function processFile(fileName, fileData) {
  try {
      // 🔍 Input Validation
      if (!fileName) {
          throw new ReferenceError("File name is missing.");
      }
      if (typeof fileData !== "string") {
          throw new TypeError("File data must be a string.");
      }
      if (fileData.trim() === "") {
          throw new Error("File data cannot be empty.");
      }

      // ✅ Simulated File Processing
      console.log(`Processing file: ${fileName}`);
      console.log(`File content: ${fileData}`);
    // TODO: Add input validation here
    
    
    // TODO: Add simulated file operations (reading/writing)
    
  } catch (err) {
      // ⚠️ Handle Known Errors
      console.error(`${err.name}: ${err.message}`);
  } finally {
      // 📦 Always Release Resources
      console.log("Closing file handle...");
    // TODO: Implement error handling
    
  }
  // TODO: Implement a finally block to close resources
}

// ============================================
// 🧪 Test Cases
// 🧪 Test Cases Below
// ============================================

const TestCases = [
  processFile("example.txt", "Hello, World!"),
  processFile("", "Some data"),
  processFile("data.txt", ""),
  processFile("info.txt", 12345)
];

processFile(); // ❌ ReferenceError: File name is missing