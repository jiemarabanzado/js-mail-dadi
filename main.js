function OnlyMail(){
    document.getElementById('Mail-Es').style.display='block';
    document.getElementById('Gioco-dadi').style.display='none';
}
function OnlyDice(){
    document.getElementById('Mail-Es').style.display='none';
    document.getElementById('Gioco-dadi').style.display='block';
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
//gioco dei dadi
function Cpu(){
    const a = (Math.random() * (6-1) + 1).toFixed(0);
    document.getElementById('begin').style.display='none';
    document.getElementById('reset').style.display='block';
    console.log(a);
    if(a==1){
        document.getElementById('one').style.display='block';
    }
    if(a==2){
        document.getElementById('two').style.display='block';
    }
    if(a==3){
        document.getElementById('three').style.display='block';
    }
    if(a==4){
        document.getElementById('four').style.display='block';
    }
    if(a==5){
        document.getElementById('five').style.display='block';
    }
    if(a==6){
        document.getElementById('six').style.display='block';
    }
    const b = (Math.random() * (6-1) + 1).toFixed(0);
    if(b==1){
        document.getElementById('oneU').style.display='block';
    }
    if(b==2){
        document.getElementById('twoU').style.display='block';
    }
    if(b==3){
        document.getElementById('threeU').style.display='block';
    }
    if(b==4){
        document.getElementById('fourU').style.display='block';
    }
    if(b==5){
        document.getElementById('fiveU').style.display='block';
    }
    if(b==6){
        document.getElementById('sixU').style.display='block';
    }
    if(a>b){
        document.getElementById('Winner').innerHTML='hai Perso';
        document.getElementById('Winner').style.color='red';
    }else{
        document.getElementById('Winner').innerHTML='hai Vinto';
        document.getElementById('Winner').style.color='green';
    }
}