var Pewdiepie= {
    name: "pewdiepie",
    subscriber_num: 83000000,
    fact: "PewDiePie’s real name is Felix Arvid Ulf Kjellberg. He is 29 years old and was born on October 24, 1989, in Gothenburg, Sweden.",
    getname: function(){
        return this.name;
    },
    getsubs: function(){
        return this.subscriber_num;
    },
    getfact: function(){
        return this.fact;
    }
};

var Shane_Dawson= {
    name: "shane dawson",
    subscriber_num: 20000000,
    fact: "He was named the Choice Web Star at the 2010 Teen Choice Awards.",
    getname: function(){
        return this.name;
    },
    getsubs: function(){
        return this.subscriber_num;
    },
    getfact: function(){
        return this.fact;
    }
};

var Philip_Defranco= {
    name: "philip defranco",
    subscriber_num: 6300000,
    fact:"He won the 2013 SourceFed Award for Audience Choice for Best Series of the Year.",
    getname: function(){
        return this.name;
    },
    getsubs: function(){
        return this.subscriber_num;
    },
    getfact: function(){
        return this.fact;
    }
};

var Marques_Brownlee= {
    name: "marques brownlee",
    subscriber_num: 7800000,
    fact: "In 2018, he interviewed Tesla founder Elon Musk. He is also popular on Instagram with over 1.7 million followers.",
    getname: function(){
        return this.name;
    },
    getsubs: function(){
        return this.subscriber_num;
    },
    getfact: function(){
        return this.fact;
    }
};

var Vsauce= {
    name: "vsauce",
    subscriber_num: 14000000,
    fact: "His spit was collected to make a cake.",
    getname: function(){
        return this.name;
    },
    getsubs: function(){
        return this.subscriber_num;
    },
    getfact: function(){
        return this.fact;
    }
};

var pic= document.getElementById("ytimage");
var pic_tab= document.getElementById("imgtab");
var display_word= document.getElementById("showword");
var display_guess= document.getElementById("showguess");
var left= document.getElementById("guessleft");
var youtuberList= [Pewdiepie,Shane_Dawson,Philip_Defranco,Marques_Brownlee,Vsauce];
var randnum= Math.floor((Math.random() * 5));
var target= youtuberList[randnum].getname();
var targetHidden=[];
var Guesses= -1;
var userguess= [];

function start(){
    Guesses= 6;
    userguess= [];
    randnum= Math.floor((Math.random() * 5));
    target= youtuberList[randnum].getname();
    targetHidden= [];
    
    for(var i=0; i<target.length;++i){
        if(target[i]!==" "){
            targetHidden.push("-");
        }
        else{targetHidden.push(" ");}
    }
}

function hasLetter(letter){
    var flag= false;
    for(var i=0; i<target.length;i++){
        if(target[i]===letter){
            targetHidden[i]=letter;
            flag= true;
        }
    }
    userguess.push(letter);
    display_word.textContent= targetHidden;
    display_guess.textContent= userguess;
    left.textContent= Guesses;
    return flag;
}


function won(){
    var flag= true;
    for(var i=0; i<target.length;++i){
        if(target[i]!==targetHidden[i]){
            flag= false;
            break;
        }
    }
    return flag;
}

start();

document.onkeyup = function(event){
    var userinput= event.key;
    if(Guesses===0){
        start();
        alert("You Lose!");
        display_word.textContent= targetHidden;
        display_guess.textContent= userguess;
        left.textContent= Guesses;
    }
    if(!hasLetter(userinput)){
        --Guesses;
        left.textContent= Guesses;
    }
    if(won()){
        alert("Winner!");
        var subs= document.createElement("p");
        var facts= document.createElement("p");
        if(target==="Pewdiepie"){
            pic.src="assets/images/pweds.jpeg";
        }
        if(target==="Shane Dawson"){
            pic.src="../images/shane.jpg";
        }
        if(target==="Philip Defranco"){
            pic.src="../images/philip.jpg";
        }
        if(target==="Marques Brownlee"){
            pic.src="../images/marques.jpg";
        }
        if(target==="Vsauce"){
            pic.src="../images/vsauce.png";
        }
        sub= youtuberList[randnum].getsubs();
        facts= youtuberList[randnum].getfact();
        // pic_tab.appendChild(sub);
        // pic_tab.appendChild(facts);
        start();
        display_word.textContent= targetHidden;
        display_guess.textContent= userguess;
        left.textContent= Guesses;
    }
}

