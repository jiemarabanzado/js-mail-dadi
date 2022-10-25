function OnlyMail(){
  document.getElementById('Mail-Es').style.display='block';
}
function OnlyDice(){
    
}
function Hint(){
    alert('prova con:(abcd,efg,1234,5678)@gmail.com');
}
function Verifica(){
    const Emails = ["abcd@gmail.com","efg@gmail.com","1234@gmail.com","5678@gmai.com"];
    let Esito=document.createElement('div');
    let Adress =document.getElementById('Email').value;
    Esito.innerHTML=`${Adress} :Non risulta nella lista`
    for (let index = 0; index < Emails.length; index++){
        let element = Emails[index];
        if(element==Adress){
            Esito.innerHTML=`${Adress} :Risulta nella lista`;
            document.getElementById('hint').style.display='none';
        }        
    }
    Esito.classList.add('Esito')
    document.getElementById('Result').append(Esito);

    if(Esito.innerHTML==`${Adress} :Non risulta nella lista`){
        document.getElementById('hint').style.display='block';}

    document.getElementById('Email').value=null;
}