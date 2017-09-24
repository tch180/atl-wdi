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
        this.foodinTummy--;
        console.log("WAAH!");
        console.log(this.name + ' has food in tummy = ' + this.health);
    };
}

//create new Tamagotchis
var tamagotchi1 = new tamagotchi();
var tamagotchi2 = new tamagotchi();

//test out your Tamagotchies below via console.logs
tamagotchi1.cry();
tamagotchi2.cry();