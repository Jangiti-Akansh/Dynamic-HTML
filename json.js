function loadData() {
    if (!localStorage.getItem('employees')) {
      var employees = {
        "abhi@gmail.com": {
          "firstName": "Abhishek",
          "lastName": "Verma",
          "mobile": "9012345678",
          "age": 25,
          "city": "Delhi"
        },
        "babu@gmail.com": {
          "firstName": "Babu",
          "lastName": "Annam",
          "mobile": "1012345678",
          "age": 20,
          "city": "Hyderabad"
        },
        "chitra@gmail.com": {
          "firstName": "Chitra",
          "lastName": "Kumar",
          "mobile": "2012345678",
          "age": 22,
          "city": "Bangalore"
        },
        "deepa@gmail.com": {
          "firstName": "Deepa",
          "lastName": "Verma",
          "mobile": "3012345678",
          "age": 27,
          "city": "Chennai"
        },
        "john@gmail.com": {
          "firstName": "John",
          "lastName": "Doe",
          "mobile": "4012345678",
          "age": 25,
          "city": "Kolkata"
        },
        "mark@gmail.com": {
          "firstName": "Mark",
          "lastName": "Henry",
          "mobile": "5012345678",
          "age": 26,
          "city": "Mumbai"
        },
        "glenn@gmail.com": {
          "firstName": "Glenn",
          "lastName": "Phillips",
          "mobile": "6012345678",
          "age": 28,
          "city": "Wellington"
        },
        "matt@gmail.com": {
          "firstName": "Matt",
          "lastName": "Renshaw",
          "mobile": "7012345678",
          "age": 25,
          "city": "Brisbane"
        },
        "harpreet@gmail.com": {
          "firstName": "Harpreet",
          "lastName": "Brar",
          "mobile": "8012345678",
          "age": 24,
          "city": "Chandigarh"
        },
        "david@gmail.com": {
          "firstName": "David",
          "lastName": "Warner",
          "mobile": "1112345678",
          "age": 29,
          "city": "Melbourne"
        },
        "hitler@gmail.com": {
          "firstName": "Adolf",
          "lastName": "Hitler",
          "mobile": "2112345678",
          "age": 27,
          "city": "Pune"
        },
        "kriti@gmail.com": {
          "firstName": "Kriti",
          "lastName": "Kapoor",
          "mobile": "3112345678",
          "age": 26,
          "city": "Patna"
        },
        "ayesha@gmail.com": {
          "firstName": "Ayesha",
          "lastName": "Sharma",
          "mobile": "4112345678",
          "age": 26,
          "city": "Varanasi"
        },
        "aditya@gmail.com": {
          "firstName": "Aditya",
          "lastName": "Kulkarni",
          "mobile": "5112345678",
          "age": 22,
          "city": "Thane"
        },
        "devansh@gmail.com": {
          "firstName": "Devansh",
          "lastName": "Mishra",
          "mobile": "6112345678",
          "age": 24,
          "city": "Kanpur"
        },
        "virat@gmail.com": {
          "firstName": "Virat",
          "lastName": "Singh",
          "mobile": "7112345678",
          "age": 30,
          "city": "Ludhiana"
        },
        "pranav@gmail.com": {
          "firstName": "Pranav",
          "lastName": "Gupta",
          "mobile": "8112345678",
          "age": 27,
          "city": "Bhopal"
        },
        "anya@gmail.com": {
          "firstName": "Anya",
          "lastName": "Mehra",
          "mobile": "9112345678",
          "age": 23,
          "city": "Solapur"
        },
        "vihaan@gmail.com": {
          "firstName": "Vihaan",
          "lastName": "Mehta",
          "mobile": "1212345678",
          "age": 32,
          "city": "Lucknow"
        },
        "neeraj@gmail.com": {
          "firstName": "Neeraj",
          "lastName": "Patel",
          "mobile": "2212345678",
          "age": 28,
          "city": "Mumbai"
        },
        "riya@gmail.com": {
          "firstName": "Riya",
          "lastName": "Koli",
          "mobile": "3212345678",
          "age": 29,
          "city": "Nasik"
        },
        "rahul@gmail.com": {
          "firstName": "Rahul",
          "lastName": "Choudhary",
          "mobile": "4212345678",
          "age": 34,
          "city": "Surat"
        },
        "dheeraj@gmail.com": {
          "firstName": "Dheeraj",
          "lastName": "Reddy",
          "mobile": "5212345678",
          "age": 23,
          "city": "Hyderabad"
        },
        "aryan@gmail.com": {
          "firstName": "Aryan",
          "lastName": "Shah",
          "mobile": "6212345678",
          "age": 25,
          "city": "Ahmedabad"
        },
        "rohith@gmail.com": {
          "firstName": "Rohith",
          "lastName": "Khanna",
          "mobile": "7212345678",
          "age": 22,
          "city": "Chennai"
        }
      };
      localStorage.setItem('employees', JSON.stringify(employees));
    }
    var empData = JSON.parse(localStorage.getItem('employees'));
    var empTab = document.getElementById('empTab');
    var keys = Object.keys(empData);
    keys.forEach(function(email, index) {
      var emp = empData[email];
      var rowClass = index % 2 === 0 ? 'row-yellow' : 'row-green';
      var row = document.createElement('div');
      row.className = 'tabler ' + rowClass;
      row.innerHTML = `
        <span class="cell">${emp.firstName} ${emp.lastName}</span>
        <span class="cell">${emp.age}</span>
        <span class="cell">${emp.mobile}</span>
        <span class="cell">${email}</span>
        <span class="cell">${emp.city}</span>
      `;
      empTab.appendChild(row);
    });
  }
  loadData();
  
