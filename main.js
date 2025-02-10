function logIn() {
  const USERNAME = document.getElementById("username").value;
  const PASSWORD = document.getElementById("password").value;

  fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  })
    .then((response) => response.json())
    .then(data => {

      if(data.access){
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        
        window.location.href= './dashboard/dashboard.html';
        
        
      }else{
        console.log('Kein Access Token vorhanden')
      }
    });

  return false;
}
