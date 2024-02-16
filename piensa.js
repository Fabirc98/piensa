`use strict`

class Login {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    authenticate() {
      
      return Math.random() < 0.5; // Simula la autenticación exitosa la mitad del tiempo
    }
  }
  
  let userLogin = new Login("usuario", "contraseña");
  alert(userLogin.authenticate());