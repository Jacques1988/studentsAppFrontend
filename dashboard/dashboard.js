let tableBody = document.getElementById("table-body");

const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
  window.location.href = "../index.html";
}

fetch("http://127.0.0.1:8000/api/students/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${ACCESSKEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach((student) => {
      let tableRow = document.createElement("tr");
      let tableDataID = document.createElement("td");
      let tableDataFirstname = document.createElement("td");
      let tableDataLastname = document.createElement("td");
      let tableDataAge = document.createElement("td");
      let tableDataEdit = document.createElement("td");
      let tableDataDelete = document.createElement("td");

      tableDataID.innerHTML = `${student.id}`;
      tableDataFirstname.innerHTML = `${student.firstname}`;
      tableDataLastname.innerHTML = `${student.lastname}`;
      tableDataAge.innerHTML = `${student.age}`;
      tableDataEdit.innerHTML = `<button class="btn btn-secondary" onclick="editStudent(${student.id})">Bearbeiten</button>`;
      tableDataDelete.innerHTML = `<button class="btn btn-danger" onclick="deleteStudent(${student.id})">Bearbeiten</button>`;

      tableBody.appendChild(tableRow);
      tableRow.appendChild(tableDataID);
      tableRow.appendChild(tableDataFirstname);
      tableRow.appendChild(tableDataLastname);
      tableRow.appendChild(tableDataAge);
      tableRow.appendChild(tableDataEdit);
      tableRow.appendChild(tableDataDelete);
    });
  });

function logOut() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "../index.html";
}

function editStudent(id) {
  console.log(
    `Es handelt sich um den Studenten ${id} den wir bearbeiten wollen`
  );
}

function deleteStudent(id) {
  console.log(`Wir wollen den Studenten mit der ID ${id} löschen`);
}
