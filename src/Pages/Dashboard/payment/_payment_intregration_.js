/**
 *
 * ! 1. install stripe and react stripe js
 * ? 2. creat a checkout from with card element (card element contains : card number , expired date , cvs , zip code )
 *! 3. create account on strike and get the publishable key pk
 * 4. get  card information
 * 5. create a payment methord
 *  6 .use test card to test payment
 * 7. on the server side : install stripe
 * npm install --save stripe
 * 8 . create a payment intent api with payment methord : ['card ]
 * ? make sure you provide  amount  in cents (multiply price with 100)
 *=> call payment intent api to get the client secret and stored in a a state
 * 9. use confirm card payment api with client secret  abs card info
 * display confirm  error
 * display confirm card success
 * TODO:
 * # do things after payment
 *
 *
 *
 *
 */
