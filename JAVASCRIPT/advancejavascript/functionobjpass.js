let newUser = { id: 4, name: "Diana", role: "user", location: "Bost,on,new,roleamerica" };


function showinfo({id,name,role,location}){



    let arr=location.split(",")

    console.log(arr);
    


    console.log(id);
    



}

showinfo(newUser)