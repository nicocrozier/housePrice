// Load our saved model from current directory (which will be
// hosted via Firebase Hosting)





async function predict() {

    // Get the input element and its value
  const inputElement = document.getElementById('input-number');
  const inputValue = Number(inputElement.value);

    // Add 10 to the input value
  //const result = inputValue + 10;




  // Relative URL provided for my-model.json.
  const model = await tf.loadLayersModel('my-model.json');
  // Once model is loaded, let's try using it to make a prediction!
  // Print to developer console for now.
  //model.predict(tf.tensor2d([[inputValue]])).print();

  const result = model.predict(tf.tensor2d([[inputValue]]));



  // Get the output value as a JavaScript number
  const outputValue = result.dataSync()[0];



//formatted

//const formatted = outputValue.toLocaleString("en-US")



  // Print the output value to the web page
  document.getElementById("output").textContent = outputValue.toLocaleString("en-US");



  // Set the result text to the new value
  const resultElement = document.getElementById('result');
  resultElement.textContent = outputValue.toLocaleString("en-US");
}

predict();
