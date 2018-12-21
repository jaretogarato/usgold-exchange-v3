let querystring = require('querystring');
let request = require('request');
const bcrypt = require('bcrypt');

const Web3 = require("web3");
let web3 = new Web3();
const sha256 = require("sha256");

async function getPurchaseToken(amount, cartId){
    let currency = "USD";
    let version = "3.0";

    let merchantKey = "$2a$12$jmMzBcYYnDCVohAFSfev/u";
    let merchantCode = "ea4ac19f-d600-4c8c-ac3b-c4d42e7f3eca";

    let notifyURL = 'https://www.usgold.io/api/pingPost';
    let returnURL = 'https://www.usgold.io/api/pingGet?x=1';
    let channelCode = "BANK_TRANSFER";

    let signatureParams = ([cartId, amount, currency, merchantCode, version]).join(';');
    let hash = sha256(signatureParams);

    let rawSignature = await bcrypt.hash(hash,merchantKey );
    let signature = rawSignature.replace(merchantKey,"");

    //https://paysecure.gavame.com/api/transfer/v1/payIn/requestToken"
    let http = require("https");

    let options = {
        "method": "POST",
        "hostname": "paysecure.gavame.com",
        "port": null,
        "path": "/api/transfer/v1/payIn/requestToken",
        "headers": { "content-type": "application/json" }
    };

    return new Promise((resolve, reject) => {
        let req = http.request(options, function (res) {
            let chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                let body = Buffer.concat(chunks);

                let x = JSON.parse(body.toString());
                resolve(x.body.token);
            });

            res.on("error", function (e) {
                reject(e);
            })
        });

        req.write(JSON.stringify({
            header:
                {
                    version: version,
                    merchantCode: merchantCode,
                    signature: signature
                },
            body:
                {
                    channelCode: channelCode,
                    notifyURL: notifyURL,
                    returnURL: returnURL,
                    orderAmount: amount,
                    orderTime: Math.floor((Date.now() / 1000)) + "",
                    cartId: cartId,
                    currency: currency
                }
        }));
        req.end();
    });
}


getPurchaseToken("10.00", Math.floor((Date.now()/1000)) + "").then((purchaseToken)=>{
    console.log("purchase token:");
    console.log(purchaseToken);
});

