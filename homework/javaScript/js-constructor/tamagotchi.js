console.log('tamagotchi file is loaded');

//your class declaration here
class tamagotchi {
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodinTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodinTummy--
        console.log("WAAH!");
        console.log(this.name + ' has food in tummy = ' + this.foodinTummy);
    }
    puke(){
        this.health --
        console.log("SICK AS A DOG")
        console.log(this.name + ' has current health = ' + this.health);
    }
    yawn(){
        this.restedness--
        console.log("I AM SO TIRED")
        console.log(this.name + ' has current restedness of : ' + this.restedness);
    }
    start(){
        console.log("LET'S GO" + this.name);
        const me = this
        this.hungerTimer = setInterval(function(){
            me.cry();
        }, 4000)
        this.yawnTimer = setInterval(function(){
            me.yawn();
        },5000)
        this.sickTimer = setInterval(function(){
            me.puke();
        }, 3500)
    }


stop () {
    console.log("stop" + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
    }
}

//create new Tamagotchis
var tamagotchi1 = new tamagotchi('jade', 'dog');
var tamagotchi2 = new tamagotchi('elias', 'cat');

console.log(tamagotchi1);
console.log(tamagotchi2);
//test out your Tamagotchies below via console.logs
tamagotchi1.yawn();
tamagotchi2.cry();

tamagotchi1.start();
tamagotchi2.start();

/* tamagotchi1.stop();
tamagotchi2.stop(); */
