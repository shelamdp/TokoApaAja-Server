# Cuisine API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`
- `POST /register`
- `POST /auth/google-sign-in`
- `GET /product`
- `GET /product/limit`
- `GET /product/:id`
- `DELETE /cart/bulkDestroy`
- `GET /cart`
- `POST /cart/:id`
- `DELETE /cart/:id`
- `GET /cart/price`
- `POST /payment/token`
- `GET /payment/history`
  
  

&nbsp;


## 1. POST /register

Request:

- body:

```json
{
    "name": "saha",
    "email": "saha@mail.com",
    "password": "password",
    "phoneNumber": "0812345678",
    "address": "jalan yang benar",
}
```

_Response (201 - Created)_

```json
{
    "id": 8,
    "name": "saha",
    "email": "saha@mail.com",
    "password": "paadnadwuhsaxjshfveyigwUDOH    ",
    "phoneNumber": "0812345678",
    "address": "jalan yang benar",
    "updatedAt": "2023-06-14T12:08:51.279Z",
    "createdAt": "2023-06-14T12:08:51.279Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email already been registered"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "saha@mail.com",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NzQ0ODA0fQ.dCiVGaxgg5l7pniVWwCqNeZFe63MF4jUm_c9aeJZBSs"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email/Password"
}
```

&nbsp;


## 3. POST /auth/google-sign-in

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2NzQ0ODA0fQ.dCiVGaxgg5l7pniVWwCqNeZFe63MF4j9aeJZBSs"
}
```

&nbsp;

## 4. GET /product

Description:
- Get all product from api

_Response (200 - OK)_


```json
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 1100000,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 230000,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 560000,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    ....
]
```


&nbsp;

## 5. GET /product/limit

Description:
- Get 4 product from api

- params:

```json
{
  "limit": 4
}
```

_Response (200 - OK)_


```json
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 1100000,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
 {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 160000,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    }
    ....
]
```


&nbsp;


## 6. GET /product/:id

Description:
- Get product by id

- params:

```json
{
  "id": "2"
}
```

_Response (200 - OK)_

```json
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 230000,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}
```


## 7. DELETE /cart/bulkDestroy

Description:
- Delete cart items user after checkout by req.user.id

- authentication:

```json
{
  "access_token": "access_token"
}
```

_Response (200 - OK)_

```json

{
    "message": "success"
}
```



&nbsp;



## 8. GET /cart

Description:
- Get all cart items from database


- authentication:

```json
{
  "access_token": "access_token"
}
```

_Response (200 - OK)_


```json
[
    {
        "id": 56,
        "UserId": 1,
        "ProductId": 20,
        "productName": "DANVOUY Womens T Shirt Casual Cotton Short",
        "productPrice": 130000,
        "productImg": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "createdAt": "2023-07-05T16:43:33.710Z",
        "updatedAt": "2023-07-05T16:43:33.710Z"
    },
    {
        "id": 57,
        "UserId": 1,
        "ProductId": 10,
        "productName": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "productPrice": 1090000,
        "productImg": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "createdAt": "2023-07-05T16:43:37.129Z",
        "updatedAt": "2023-07-05T16:43:37.129Z"
    },
    {
        "id": 58,
        "UserId": 1,
        "ProductId": 15,
        "productName": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "productPrice": 570000,
        "productImg": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "createdAt": "2023-07-05T16:43:38.638Z",
        "updatedAt": "2023-07-05T16:43:38.638Z"
    },
    ....
]
```
_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal  Server Error"
}
```

&nbsp;


## 9. POST /cart/:id

Description: 
- Add items to cart

- authentication:

```json
{
  "access_token": "access_token"
}
```

- params:

```json
{
  "id": "2"
}
```

Request:

_Response (201 - Created)_

```json
{
    "message": "Success add to cart"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "UserId is required"
}
OR
{
  "message": "ProductId is required"
}
OR
{
  "message": "productName is required"
}
OR
{
  "message": "productPrice is required"
}
OR
{
  "message": "productImg url is required"
}
```

&nbsp;



## 10. DELETE /cart/:id

Description:
- Delete cart items by id

- authentication:

```json
{
  "access_token": "access_token"
}
```
- authorization
- params:

```json
{
  "id": "2"
}
```

_Response (200 - OK)_

```json

{
     "message": "success to delete product DANVOUY Womens T Shirt Casual Cotton Short "
}
```

_Response (404 - Unauthorized)_

```json
{
  "message": "Data Not Found"
}
```


&nbsp;



## 11. GET /cart/price

Description:
- Get total price from users cart

- authentication:

```json
{
  "access_token": "access_token"
}
```
_Response (200 - OK)_


```json
{
    "totalPrice": 1790000
}
```


&nbsp;



## 12. POST /payment/token

Description:
- Get token from midtrans

- authentication:

```json
{
  "access_token": "access_token"
}
```

_Response (200 - Created)_

```json
{
    "token": "91b425ce-6c4e-4544-b91c-40e43e062358",
    "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/91b425ce-6c4e-4544-b91c-40e43e062358"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "order_id cannot be null"
}
OR
{
  "message": "gross_amount cannot be null"
}

```

&nbsp;


## 13. GET payment/history

Description:
- Get all histories of user transactions

- authentication:

```json
{
  "access_token": "access_token"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "totalPrice": 111000,
        "UserId": 1,
        "status": "Shipped",
        "createdAt": "2023-07-05T12:41:50.810Z",
        "updatedAt": "2023-07-05T12:41:50.810Z"
    },
    {
        "id": 2,
        "totalPrice": 39000,
        "UserId": 1,
        "status": "Shipped",
        "createdAt": "2023-07-05T12:56:22.603Z",
        "updatedAt": "2023-07-05T12:56:22.603Z"
    },
    {
        "id": 3,
        "totalPrice": 39000,
        "UserId": 1,
        "status": "Shipped",
        "createdAt": "2023-07-05T13:01:51.718Z",
        "updatedAt": "2023-07-05T13:01:51.718Z"
    },
  ....
]

```


&nbsp;


## Global Error

_Response (404 - Not Found)_

```json
{
    "message": "Data Not Found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal  Server Error"
}
```