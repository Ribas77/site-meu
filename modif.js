function insta() {
    let resp = confirm(`ATENÇÃO! Essa conta é meramente inventada para fins acadêmicos, sem nenhuma interação comercial.`)
     if(resp) {
         window.location.href = "https://www.instagram.com/granbrasilvoos/";
     }
     else {
         
     }
 }
 function clicou(event) {
     // Impedindo o submit auto
     event.preventDefault();
     alert("Sua mensagem foi enviada!");
 
     
      document.getElementById('meuForm').submit()
 }
 function cell() {
     alert(`Atenção! Este número é meramente fantasioso. Não há como se contatar com ele.`)
 }
