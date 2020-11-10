class Player
{
    constructor() { }

    //to get the player count
    getCount()
    {
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount= data.val();
        })
    }

    //to update the player count in the databse
    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        })
    }

    //to update the name in the database
    update(name)
    {
        var playerIndex= "player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}