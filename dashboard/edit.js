const accessToken = localStorage.getItem("access");
let idField = document.getElementById("id-field");
let firstnameField = document.getElementById("firstname-field");
let lastnameField = document.getElementById("lastname-field");
let ageField = document.getElementById("age-field");

document.addEventListener("DOMContentLoaded", () => {
  let studentIdParam = new URLSearchParams(window.location.search);
  const studentID = studentIdParam.get("id");

  fetch(`http://127.0.0.1:8000/api/students/${studentID}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${accessToken}`
    },
  })
    .then((response) => response.json())
    .then((data) => {
      idField.value = data.id;
      firstnameField.value = data.firstname;
      lastnameField.value = data.lastname;
      ageField.value = data.age;
    });
});

function editStudent() {
  newData = {
    id: idField.value,
    firstname: firstnameField.value,
    lastname: lastnameField.value,
    age: ageField.value,
  };

  fetch(`http://127.0.0.1:8000/api/students/${newData.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Student mit der ID ${newData.id} erfolgreich bearbeitet`);
      window.location.href = "dashboard.html";
    });

  return false;
}
