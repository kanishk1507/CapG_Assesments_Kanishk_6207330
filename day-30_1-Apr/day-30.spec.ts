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


    console.log(await r3.status());
    console.log(await r3.json());


    let r4 = await request.get(`${baseURL}/shoppers/${shopperId}/wishlist`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r4.json());

    let r5 = await request.post(`${baseURL}/shoppers/${shopperId}/address`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {

            addressId: 2,
            buildingInfo: "House No. 45, Sharma Villa",
            city: "Jaipur",
            country: "India",
            landmark: "Near Central Park",
            name: "Aryan Upadhyay",
            phone: "9123456789",
            pincode: "432101",
            state: "maharashtra",
            streetInfo: "C-Scheme, Ashok Nagar",
            type: "Home"
        }, ignoreHTTPSErrors: true
    })
    console.log(await r5.status());
    console.log(await r5.json());
    let aId = (await r5.json()).data.addressId;
    console.log(aId);

    let r6 = await request.get(`${baseURL}/shoppers/${shopperId}/address`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r6.json());

    let r7 = await request.get(`${baseURL}/shoppers/${shopperId}/address/${aId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r7.json());

    let r8 = await request.put(`${baseURL}/shoppers/${shopperId}/address/${aId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {
            addressId: aId,
            buildingInfo: "House No. 45, Sharma Villa",
            city: "Pune",
            country: "India",
            landmark: "Near Central Park",
            name: "Ajay Sharma",
            phone: "9123456789",
            pincode: "432101",
            state: "maharashtra",
            streetInfo: "C-Scheme, Ashok Nagar",
            type: "Home"
        }, ignoreHTTPSErrors: true
    })
    console.log(await r8.status());
    console.log(await r8.json());


    let r9 = await request.post(`${baseURL}/shoppers/${shopperId}/carts`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {
            productId: pId,
            quantity: 4
        }, ignoreHTTPSErrors: true
    })
    console.log(await r9.status());
    console.log(await r9.json());


    let r10 = await request.get(`${baseURL}/shoppers/${shopperId}/carts`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r10.json());
    let iId = (await r10.json()).data[0].itemId;
    console.log(iId);

    let r11 = await request.put(`${baseURL}/shoppers/${shopperId}/carts/${iId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {
            productId: pId,
            quantity: 7
        }, ignoreHTTPSErrors: true
    })
    console.log(await r11.status());
    // console.log(await r11.json());

    let r12 = await request.post(`${baseURL}/shoppers/${shopperId}/orders`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        data: {
            address: {
                addressId: aId,
                buildingInfo: "House No. 45, Sharma Villa",
                city: "Pune",
                country: "India",
                landmark: "Near Central Park",
                name: "Ajay Sharma",
                phone: "9123456799",
                pincode: "432101",
                state: "Maharashtra",
                streetInfo: "C-Scheme, Ashok Nagar",
                type: "Home"
            },
            paymentMode: "COD"
        }, ignoreHTTPSErrors: true
    })
    const status12 = await r12.status();
    console.log('Order API status:', status12);
    // console.log(await r12.json());

    let r13 = await request.get(`${baseURL}/shoppers/${shopperId}/orders`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r13.json());
    let orderId = (await r13.json()).data[0].orderId;

    let r14 = await request.patch(`${baseURL}/shoppers/${shopperId}/orders/${orderId}?status=DELIVERED`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }, ignoreHTTPSErrors: true
    })
    console.log(await r14.status());
    console.log(await r14.json());

    
})