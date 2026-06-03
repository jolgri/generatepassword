const html = document.documentElement;
        const toggle = document.getElementById("themeSwitch");

        // Load saved theme
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            toggle.checked = true;
        }

        toggle.addEventListener("change", () => {
            html.classList.toggle("dark");
            localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
        });


        let psw1El = document.getElementById("psw1")
        let psw2El = document.getElementById("psw2")

 const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

        function generatePsw(){
            let psw1="";
            let n=15;
            for(let i=0; i<=n; i++){
               let randomCharacter = Math.floor(Math.random()* characters.length-1) +1;
               psw1 += characters[randomCharacter];
            }
      let psw2="";
            let n2=15;
            for(let i=0; i<=n; i++){
               let randomCharacter2 = Math.floor(Math.random()* characters.length-1) +1;
               psw2 += characters[randomCharacter2];
            }
    
        psw1El.textContent = psw1;
        psw2El.textContent = psw2;
        }