#Simple YotPo Site Reviews API
This is a simple YotPo Site Reviews API server to receive the site reviews as a total in JSON.
Easy to setup on a VPS.

##Why is this made?
The YotPo default API required you to pass a token in the get request that provides access to sensetive methods & data.
So it's not safe on the client side to do a request to the YotPo API.

## Route
GET ``/reviews/site`` 
### Response
``
{
    "domain_key": "yotpo_site_reviews",
    "product_score": "4.68",
    "total_reviews": 393
}
``

## How to install?

Download or Git clone and run ``npm i``

## Configure API keys
Create a **config.json** file with your keys. <br />
Client ID = API Key <br />
Client secret = API Secret <br />
Domain = OWN DOMAIN in relation to CORS <br />
Server will only allow requests from this domain(s)

You can leave the grant_type as default.

Please see config-sample.json as example file.
## How to start?
Run ``npm start`` 

Like I said, this simple and easy.

Feel free to add own routes.
