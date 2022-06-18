const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

const gbBooks = {
    'bookOne': {
        'title': 'Welcome to Dead House',
        'tagline': 'It will just kill you.',
        'author' : 'R.L. Stine',
        'coverArtist': 'Tim Jacobus',
        'publisher' : 'Scholastic Parachute Press',
        'releaseDate' : 'July 1992',
        'pages': 123,
        'ISBN' : 0590453653,
        'image': 'https://static.wikia.nocookie.net/goosebumps/images/8/88/Welcome_to_Dead_House_%28Cover%29.jpg/revision/latest/scale-to-width-down/678?cb=20161223191421',
        'Summary' : 'Welcome to Dead House was the first book in the original Goosebumps book series. It was first published in 1992. Along with this, it was then rereleased in 2010 as the thirteenth book in the Classic Goosebumps series, featuring new artwork by Brandon Dorman.The cover illustration features an old, dark house at night, with the front door slightly ajar, and a strange figure illuminated in the window by an orange light.'
    },
    'bookTwo': {
        'title': 'Stay Out of the Basement',
        'tagline' : 'Something/s waiting in the dark...',
        'author' : 'R.L. Stine',
        'coverArtist' : 'Jim Thiesen',
        'publisher' : 'Scholastic Parachute Press',
        'releaseDate' : 'July 1992',
        'pages': 122,
        'ISBN' : 9780439568456,
        'image': 'https://static.wikia.nocookie.net/goosebumps/images/0/0c/Stay_Out_of_the_Basement_%28Cover%29.jpg/revision/latest/scale-to-width-down/676?cb=20160705013444',
        'Summary' : 'Stay Out of the Basement is the second book in the original Goosebumps book series. It was first published in 1992. The book follows Margaret and Casey Brewer, whose father has been acting very strange since losing his job as a botanist at a nearby university. When Mrs. Brewer goes out of town, his obsession with his plants gets out of hand.The cover illustration depicts a plant-like hand emerging from behind a door.The 2003 reprint/s cover illustration depicts Dr. Brewer/s clone in front of a lab table holding a beaker in his hand.'
    },
    'bookThree': { 
    'title': 'Monster Blood',
    'tagline' : 'It/s a monster blood drive!',
    'author' : 'R.L. Stine',
    'coverArtist' : 'Tim Jacobus',
    'publisher' : 'Scholastic Parachute Press',
    'releaseDate' : 'September 1992',
    'pages': 128,
    'ISBN' : 9780590453677,
    'image': 'https://static.wikia.nocookie.net/goosebumps/images/f/fa/Monster_Blood_%28Cover%29.jpg/revision/latest/scale-to-width-down/677?cb=20160813014537',
    'Summary' : 'Monster Blood is the third book in the original Goosebumps book series, and the first book in the Monster Blood saga. It was first published in 1992. The book follows Evan Ross and his friend, Andy, who discover the disturbing secret about Monster Blood, novelty slime which makes people and animals grow bigger like giants. The book was later followed-up by three sequels: Monster Blood II, Monster Blood III, and Monster Blood IV.The cover illustration shows Monster Blood oozing down the stairs as a pair of glasses are visible.'
    },
    'bookFour': {
    'title': 'Say Cheese and Die!',
    'tagline' : 'One picture is worth a thousand screams.',
    'author' : 'R.L. Stine',
    'coverArtist' : 'Tim Jacobus',
    'publisher' : 'Scholastic Parachute Press',
    'releaseDate' : 'November 1992',
    'pages': 132,
    'ISBN' : 9780590453684,
    'image': 'https://static.wikia.nocookie.net/goosebumps/images/3/38/Say_Cheese_and_Die%21_%28Cover%29.jpg/revision/latest/scale-to-width-down/678?cb=20170205154147',
    'Summary' : 'Say Cheese and Die! is the fourth book in the original Goosebumps book series, and the first book in the Say Cheese and Die! saga. It was first published in 1992. The book follows Greg and his friends who discover a strange camera, and things get chaotic after he takes a lot of pictures. It was later followed-up by the forty-fourth book, Say Cheese and Die — Again!.The original 1992 cover illustration features a family of skeletons (presumably the Banks family) having a picnic.'
    },

    'bookFive': {
    'title': 'The Curse of the Mummy',
    'tagline' : 'What will wake the dead?',
    'author' : 'R.L. Stine',
    'coverArtist' : 'Tim Jacobus',
    'publisher' : 'Scholastic Parachute Press',
    'releaseDate' : 'January 1993',
    'pages': 132,
    'ISBN' : 9780590453691,
    'image': 'https://static.wikia.nocookie.net/goosebumps/images/4/4f/The_Curse_of_the_Mummy%27s_Tomb_%28Cover%29.jpg/revision/latest/scale-to-width-down/678?cb=20161024015635',
    'Summary' : 'The Curse of the Mummy/s Tomb is the fifth book in the Goosebumps book series. It was first published in 1993, and was later followed-up by the twenty-third book, Return of the Mummy.The original 1993 cover illustration shows a mummy with glowing red eyes.The 2009 reprint has a similar mummy except it has its arms stretched ominously.'
},
    'bookSix': {
    'title': 'Let/s Get Invisible!',
    'tagline' : 'Now you see him. Now you don’t.',
    'author' : 'R.L. Stine',
    'coverArtist' : 'Tim Jacobus',
    'publisher' : 'Scholastic Parachute Press',
    'releaseDate' : 'March 1993',
    'pages': 139,
    'ISBN' : 9780590453707,
    'image': 'https://static.wikia.nocookie.net/goosebumps/images/9/91/Let%27s_Get_Invisible%21_%28Cover%29.jpg/revision/latest/scale-to-width-down/678?cb=20161223003928',
    'Summary' : 'Let/s Get Invisible! is the sixth book in the original Goosebumps book series. It was first published in 1993.The original cover illustration features Max Thompson looking through a mirror in the attic. Half his body is invisible.The Classic Goosebumps cover illustration features a boy whose head has vanished under the light of the mirror.'
},
    'bookSeven': {
    'title': 'Night of the Lovong Dummy',
    'tagline' : 'He walks, he stalks...',
    'author' : 'R.L. Stine',
    'coverArtist' : 'Tim Jacobus',
    'publisher' : 'Scholastic Parachute Press',
    'releaseDate' : 'May 1993',
    'pages': 134,
    'ISBN' : 9780590466172,
    'image': 'https://static.wikia.nocookie.net/goosebumps/images/b/b0/Night_of_the_Living_Dummy_%28Cover%29.jpg/revision/latest/scale-to-width-down/678?cb=20190210180258',
    'Summary' : 'Night of the Living Dummy was the seventh book in the original Goosebumps book series, and the first book in the Living Dummy saga. It was first published in 1993.It was later followed up by Night of the Living Dummy II in 1995 and Night of the Living Dummy III in 1996.Both the original and the Classic Goosebumps cover illustrations depict Slappy the Dummy evilly staring at the reader, his mouth agape.'
},
}
// the express method below '.get' is used to figuree out what to do when a request comes in
app.get('/',(request,respond) => {
    response.sendFile(__dirname + '/index.html') 
})
// req and res stands for ^^

app.get('/api/:gbBooks', (request,respond) => {
    const gbBooks = request.params.gbBooks.toLowerCase()
    // make all that a variable??
    if(library[gbBooks]) {
        response.json(library[gbBooks])
    }else{
        response.json(library['noBook'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})