document.addEventListener("DOMContentLoaded", () => {

  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last-name").value;
    const birthday = document.getElementById("birthday").value;

    let formData = {
      name: name,
      lastName: lastName,
      birthday: birthday
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
})