import { test } from '@playwright/test';

test('API testing with playwright on SS', async ({ request }) => {
    let baseURL = 'https://www.shoppersstack.com/shopping';
    let r1 = await request.post(`${baseURL}/users/login`, {
        data: {
            email: "testusers@gmail.com",
            password: 'Password@123',
            role: "SHOPPER"
        }, ignoreHTTPSErrors: true
    })
    console.log(await r1.json());
    let jwt = (await r1.json()).data.jwtToken;
    let shopperId = (await r1.json()).data.userId;
    console.log(shopperId)
    ......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
    console.log(jwt);


    let r2 = await request.get(`${baseURL}/products/alpha`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    // console.log(await r2.json());
    let pId = (await r2.json()).data[3].productId;
    console.log(pId);

    let r3 = await request.post(`${baseURL}/shoppers/${shopperId}/wishlist`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {
            productId: pId,
            quantity: 0
        }, ignoreHTTPSErrors: true
    })
    // let body = await r3.json();
//     if(r3){
//         const data = JSON.parse(r3);
//         console.log(data);
// }
// else{
//     console.log("No response body received.");
// }

console.log(await r3.status());

})