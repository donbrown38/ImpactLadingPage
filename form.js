let form = document.getElementById('myForm');
let successMessage = document.getElementById('successMessage');

function handleSubmit(event) {
  event.preventDefault(); // prevent default form submission behavior

  let name = document.getElementById('fname').value;
  let email = document.getElementById('email').value;

  console.log(`Form submitted: Name: ${fname}, Email: ${email}`); // log data to console

  successMessage.innerHTML = `
    <p>Thank you for submitting the form, a representative will get in touch with you! <i class="fa-sharp fa-solid fa-circle-check" style="color: #346d7f;"></i></p>`; // add success message to div element

  successMessage.style.border = '1px black ';
  successMessage.style.backgroundColor = 'white';
  successMessage.style.color = 'black';
  successMessage.style.borderRadius = '5px';
  successMessage.style.width = '650px';
  successMessage.style.fontSize = '15px';
  successMessage.style.fontStyle = 'italic';
  successMessage.style.fontWeight = '200';
  successMessage.style.height = '100px';
  successMessage.style.position = 'fixed';
  successMessage.style.paddingLeft = '20px';
  successMessage.style.paddingRight = '20px';
  successMessage.style.paddingTop = '50px';
  successMessage.style.paddingBottom = '20px';
  successMessage.style.boxShadow = '2px 2px 2px #ccc';
  successMessage.style.top = '50%';
  successMessage.style.left = '50%';
  successMessage.style.transform = '-50%, -50%';
  successMessage.style.textAlign = 'center';
  successMessage.style.boxSizing = 'border-box';

}

form.addEventListener('submit', handleSubmit);


// Remove the success message after 10 seconds
// setTimeout(function() {
//     successMessage.remove();
//   }, 10000); 

