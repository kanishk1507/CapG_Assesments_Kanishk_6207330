import {test,request} from "playwright/test";
test("Day 29",async({request})=>{
    // let r1=await request.post("https://petstore3.swagger.io/api/v3/pet",{
    //     data:{
    //         id:51,
    //         name:"oggy",
    //         status:"available"
    //     }
    // })
    // console.log(r1.status());
    // console.log((await r1.json()).name);

    let r2=await request.get("https://petstore3.swagger.io/api/v3/pet/51");
    console.log(r2.status());

    let r4=await request.post("https://petstore3.swagger.io/api/v3/pet",{
        data:{
            id:11,
            name:"bhavishya",
            status:"available"
        }
    });
    console.log((await r4.json()).name);

    let r3=await request.get("https://petstore3.swagger.io/api/v3/pet/11");
    console.log(await r3.json());

    let r5=await request.post("https://petstore3.swagger.io/api/v3/user",{
        data:{
                "id": 10,
                "username": "theUser",
                "firstName": "John",
                "lastName": "James",
                "email": "john@email.com",
                "password": "12345",
                "phone": "12345",
                "userStatus": 1
        }
    });
    let r6=await request.get("https://petstore3.swagger.io/api/v3/user/10");
    console.log(await r6.json());
});