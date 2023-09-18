
//اول شي عرفت المتغيرات الي عندي
    const colorInput = document.getElementById('colorInput');
    const heading = document.getElementById('heading');
    const textInput = document.getElementById('textInput');
    const submitButton = document.getElementById('submitButton');
    const outputText = document.getElementById('outputText');
    //عملت function حتى اقدر اغير اللون لما بتحرك بال plate
    colorInput.addEventListener('input', function () {
      const selectedColor = colorInput.value;
      heading.style.color = selectedColor;
    });
 // هي حتى اقدر ادخل نص ويطلع عندي تحت اذا ماكتبت شي بيطلع رسالة alert انو مادخلت شي 
    submitButton.addEventListener('click', function () {
      const inputText = textInput.value;
      
      if (inputText === '') {
        alert('Please type something before submitting.');
      } else {
        outputText.textContent = inputText;
      }
    });