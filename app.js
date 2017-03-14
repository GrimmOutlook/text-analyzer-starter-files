// your code here!

// 1. User enters text.  User clicks button to submit. val() returns a string
// 2. Upon clicking button, assign this user input text to a var (userText) as one long string


// 3. Use String.split method to split the long string into an array of one-word strings

// 4. Assign this array a var name (userArray)

// 5. var totalWordCount = userArray.length

   $('button').on('click', function(){
  var userText = $('#user-text').val();
  console.log(userText);

  var userArray =
    userText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();

  var totalWordCount = userArray.length;

  console.log(totalWordCount);

// 6. Average Word Length:
  //  - Set var letterCount = 0
  //  - Iterate over each string in userArray
  //  - Use String.length method to determine the length of each string
  //  - After each string's length is determined, add that count to letterCount
  //  - After iterating over each string, divide letterCount by userArray.length
      // var avgWordLength = letterCount / userArray.length

  var letterCount = 0;

  userArray.forEach(function(word){
       letterCount += word.length;
    });
  var avgWordLength = letterCount / userArray.length;

  console.log(avgWordLength);


  });






// 7. Unique Word Count:
  //  - Store first string in userArray in new array (var uniqueWordArray)
  //  - Iterate over each string in userArray, comparing it to any of the strings in uniqueWordArray
  //  - If a string in userArray doesn't match a string in uniqueWordArray, push that string into uniqueWordArray.
  //  - After iterating over each string in userArray, set var uniqueWords =    uniqueWordArray.length

// 8. Remove .hidden class from dl tag

// 9. Add corresponding answers to dd tags


































// $('button').on('click', function(){
//   var $userText = $('#user-text');

//   // var userText = document.getElementById('user-text');

// // Split each word in the string into an array of strings
//   var userArray = function(){
//     userText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
//   }

//   console.log(userArray);

// });

// var totalCount = userArray.length;

// console.log(totalCount);


