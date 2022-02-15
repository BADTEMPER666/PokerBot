const Discord = require('discord.js');

var CardArray = ["Hearts", "Diamonds", "Spades", "Clubs", "Jack", "Queen", "King", "Ace"];

var shuffledArray = [];

var pArray = [];

var bArray = [];

var pValue = 0;

var bValue = 0;

// ranks for each card //

var HEARTS = 0;
var DIAMONDS = 1;
var SPADES = 2;
var CLUBS = 3;

var JACK = 11;
var QUEEN = 12;
var KING = 13;
var ACE = 14;

module.exports = 
{
    name: 'poker',
    description: 'Play poker',
    execute(message, args, client) 
    {
        shuffleDeck(5);

        shufflePlayer(5);

        shuffleO(5);

        rankPlayer();
        
        oRank();

        var embed = new Discord.MessageEmbed()
        .setTitle('Poker')
        .addFields
        (
           { name: "Deck", value: shuffledArray},
           { name: "Your hand", value: pArray},
           { name: "Bot hand", value: bArray},
           { name: "Your hand value", value: pValue},
           { name: "Bot hand value", value: bValue}
        )
        .setColor('BLACK');
        message.channel.send(embed);
    }
}


function space()
{
    console.log("");
}

function shuffleDeck(attempts) 
{
    try
    {
        if (attempts == 0)
        {
            return; //complete loop
        }
        else
        {
            attempts--; //subtract one attempt
            var item = CardArray[Math.floor(Math.random()*CardArray.length)];
            shuffledArray.push(item);
            shuffleDeck(attempts); //loop function until completion
        }
    }
    catch (Exception)
    {
        space();
        space();
        console.log("An error occured shuffling cards, error: " + Exception);
    }
}

function shufflePlayer(attempts) 
{
    try
    {
        if (attempts == 0)
        {
            return; //complete loop
        }
        else
        {
            attempts--; //subtract one attempt
            var item = CardArray[Math.floor(Math.random()*CardArray.length)];
            pArray.push(item); //add item to p array
            shufflePlayer(attempts); //loop function until completion
        }
    }
    catch (Exception)
    {
        space();
        space();
        console.log("An error occured shuffling cards, error: " + Exception);
    }
}

function shuffleO(attempts) 
{
    try
    {
        if (attempts == 0)
        {
            return; //complete loop
        }
        else
        {
            attempts--; //subtract one attempt
            var item = CardArray[Math.floor(Math.random()*CardArray.length)];
            bArray.push(item); //add item to op array
            shuffleO(attempts); //loop function until completion
        }
    }
    catch (Exception)
    {
        space();
        space();
        console.log("An error occured shuffling cards, error: " + Exception);
    }
}

function rankPlayer()
{
    try
    {
        if (bArray.includes("Ace"))
        {
            bValue = bValue + ACE;
        }
        if (bArray.includes("Diamonds"))
        {
            bValue = bValue + DIAMONDS;
        }
        if (bArray.includes("Spades"))
        {
            bValue = bValue + SPADES;
        }
        if (bArray.includes("Clubs"))
        {
            bValue = bValue + CLUBS;
        }
        if (bArray.includes("Jack"))
        {
            bValue = bValue + JACK;
        }
        if (bArray.includes("Queen"))
        {
            bValue = bValue + QUEEN;
        }
        if (bArray.includes("King"))
        {
            bValue = bValue + KING;
        }
    }
    catch (Exception)
    {
        space();
        space();
        console.log("An error occured shuffling cards, error: " + Exception);
    }
}

function oRank()
{    
    try
    {
        if (pArray.includes("Ace"))
        {
           pValue = pValue + ACE;
        }
        if (pArray.includes("Diamonds"))
        {
           pValue = pValue + DIAMONDS;
        }
        if (pArray.includes("Spades"))
        {
            pValue = pValue + SPADES;
        }
        if (pArray.includes("Clubs"))
        {
            pValue = pValue + CLUBS;
        }
        if (pArray.includes("Jack"))
        {
           pValue = pValue + JACK;
        }
        if (pArray.includes("Queen"))
        {
           pValue = pValue + QUEEN;
        }
        if (pArray.includes("King"))
        {
            pValue = pValue + KING;
        }
    }
    catch (Exception)
    {
        space();
        space();
        console.log("An error occured shuffling cards, error: " + Exception);
    }
}