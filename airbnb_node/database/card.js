const getDb = require("./db").getDb;

class Card {
    save(card){
        const db= getDb()
        return db.collection("card").insertOne(card)
    }

    getAllUsers(){
        const db = getDb()
        return db.collection("card").find({}).toArray();
    }

    getUser(){

    }

    update(){

    }
}

module.exports = Card;