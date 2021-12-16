const request = require('supertest')


describe('suite produtos', () => {


it('Primeiro teste com jest', async () => {
  const response = await request('https://serverest.dev')
    .get('/produtos').query({
      "_id": "0jFj9RoFb1x8htu0",
    })

  //console.log(response.body)
  expect(response.status).toBe(200)
})
it('Primeiro teste com jest', async () => {
  const response = await request('https://serverest.dev')
    .get('/produtos').query({
      "_id": "2x3oH53gWt0mEsOC",
    })

  console.log(response.body)
  expect(response.status).toBe(200)
})


})
