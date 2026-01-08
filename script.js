let data = [
  { name: "Ali Khan", roll_no: 1, email: "ali@gmail.com", phone: "03001234501", pass: "pass123" },
  { name: "Ahmed Raza", roll_no: 2, email: "ahmed@gmail.com", phone: "03001234502", pass: "pass123" },
  { name: "Sara Malik", roll_no: 3, email: "sara@gmail.com", phone: "03001234503", pass: "pass123" },
  { name: "Ayesha Noor", roll_no: 4, email: "ayesha@gmail.com", phone: "03001234504", pass: "pass123" },
  { name: "Usman Ali", roll_no: 5, email: "usman@gmail.com", phone: "03001234505", pass: "pass123" },
  { name: "Hassan Khan", roll_no: 6, email: "hassan@gmail.com", phone: "03001234506", pass: "pass123" },
  { name: "Zain Abbas", roll_no: 7, email: "zain@gmail.com", phone: "03001234507", pass: "pass123" },
  { name: "Bilal Ahmed", roll_no: 8, email: "bilal@gmail.com", phone: "03001234508", pass: "pass123" },
  { name: "Fatima Sheikh", roll_no: 9, email: "fatima@gmail.com", phone: "03001234509", pass: "pass123" },
  { name: "Hamza Iqbal", roll_no: 10, email: "hamza@gmail.com", phone: "03001234510", pass: "pass123" }
];

const student = [];

function loadStudents() {
  const tbody = document.getElementById("studentTableBody");
  tbody.innerHTML = "";

  data.forEach(student => {
    tbody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll_no}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.pass}</td>
      </tr>
    `;
  });
}

function addStudent() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const pass = document.getElementById("pass").value;

  if (!name || !roll || !email || !phone || !pass) {
    alert("Please fill all fields");
    return;
  }

  data.push({
    name: name,
    roll_no: roll,
    email: email,
    phone: phone,
    pass: pass
  });

  

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("pass").value = "";
}
loadStudents();

