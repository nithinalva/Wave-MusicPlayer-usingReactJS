import { v4 as uuidv4 } from 'uuid';
function ChillHop(){

    return[

        {
            name: "Flashback",                     //array of object multiple objects infact
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg ",
            artist:"Blue Wednesday, Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
            color:["#D89FC8","#140F2D"],
            id:uuidv4(),
            active:false,       
            
        },

        {
            name: "Lax Incense"  ,       //array of object multiple objects infact
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg ",
            artist:"Mama Aiuto, Daphné",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
            color:["#D89FC8","#140F2D"],
            id:uuidv4(),
            active:false,       
        },

        {
            name:"ny90",
            cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg ",
            artist: "Ezzy",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
            color:["#37569E","#4C5790" ],
            id:uuidv4(),
            active:false

        },

        {
                name:"Tuesday",
                cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
                artist:"Comodo",
                audio:"https://mp3.chillhop.com/serve.php/?mp3=10323",
                color :["#D6B4C2","#2B2F31"],
                id:uuidv4(),
                active:false

        },

        {
            name:"Sugarless",
            cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist:"The Field Tapes, Aviino",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=11243",
            color:["#CEDEDA","#403D47"],
            id:uuidv4(),
            active:true
        },

        


    ]
}
export default ChillHop;