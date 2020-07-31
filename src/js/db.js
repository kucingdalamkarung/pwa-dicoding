const idbPromise = idb.open("footballdb", 1, function(upDB) {
    if (!upDB.objectStoreNames.contains("team_fav")) {
        let indexTeamFav = upDB.createObjectStore("team_fav", {
            keyPath: "id"
        });
        indexTeamFav.createIndex("teamName", "name", {
            unique: false
        });
    }

    if (!upDB.objectStoreNames.contains("player_fav")) {
        let indexTeamFav = upDB.createObjectStore("player_fav", {
            keyPath: "id"
        });
        indexTeamFav.createIndex("playerName", "name", {
            unique: false
        });
    }
});

function checkData(storeName, id) {

}

function getAllData() {

}

function getDataById(storeName, id) {

}

function createData(type, data) {
    idbPromise.then(db => {
        let storename = "";
        let dataToWrite = "";

        if (type === "team") {
            storename = "team_fav";
            dataToWrite = {
                // TODO: setup data
            }
        } else if (type === "player") {
            storename = "player_fav";
            dataToWrite = {
                // TODO: setup data
            }
        }

        const tx = db.transaction(storename, "readwrite");
        const store = tx.objectStore(storename);

        store.add(dataToWrite);
        return tx.complete();
    })
    .then(function() {
        console.log("Data write success.");
    })
    .catch(err => {
        console.log(err);
    });
}

function deleteData(storeName, id) {
}