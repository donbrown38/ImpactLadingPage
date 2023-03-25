// Get-start for form submission behavior

function jumpToForm() {
    const form = document.getElementById('get-started');
    const nameField = document.getElementById('my-form1');
    form.scrollIntoView({ behavior: 'smooth' });
    nameField.focus();
  }

