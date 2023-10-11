function setMsg(msg) {
    document.querySelector(".password").value = msg;
  }

  function createpassword() {
    // input se password ki lenght
    let passlenght = parseInt(document.querySelector("#password").value);

    if (passlenght < 4) {
      document.querySelector(".password").value = "Select Atleast 4 lenght";
    } else if (passlenght > 20) {
      document.querySelector(".password").value = "Max limit it 20 words";
    } else {
      const chatArr = [];

      let uppercase = document.querySelector("#uppercase");
      let lowercase = document.querySelector("#lowercase");
      let numbers = document.querySelector("#numbers");
      let symbols = document.querySelector("#symbols");

      if (uppercase.checked) {
        chatArr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (lowercase.checked) {
        chatArr.push("abcdefghijklmnopqrstuvwxyz");
      }
      if (numbers.checked) {
        chatArr.push("0123456789");
      }
      if (symbols.checked) {
        chatArr.push("@#$%^&*()_+~|}{[]></-=");
      }

      var msg = "Select Atleast One Data type";
      if (chatArr.length === 0) {
        setMsg(msg);
      } else {
        var password = "";
        for (let i = 0; i < passlenght; i++) {
          //chatArr is koi ek random data type ko singleType
          let selectornum = Math.floor(Math.random() * chatArr.length);
          let singleType = chatArr[selectornum];

          // signleType me se koi ek character select karne k liye
          const rendomChar = Math.floor(Math.random() * singleType.length);
          const selectedSingle = singleType[rendomChar];

          // Ab us single selected character ko password k ander save karna
          password = password + selectedSingle;
          // aur ese password k ander ek ek character jate rhega

        }
        setMsg(password);
      }
    }
  }

  let copybutton = document.querySelector('.button')
  let copy = document.querySelector('.password')

  copybutton.onclick =function(){
    navigator.clipboard.writeText(copy.value)
  }