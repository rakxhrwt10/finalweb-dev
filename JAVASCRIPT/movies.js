const fav_movie="The Dark Knight";

let guess=prompt("enter you movies and for exit you type quit")

while((guess!=fav_movie ) ){


    if ((guess =="quit")){


        console.log("you quit");
        

        break;
        
    }


    // console.log("wrong");

    guess=prompt("wrong guess try later!enter again")
    
}

if(guess==fav_movie){
console.log("winner");

}

