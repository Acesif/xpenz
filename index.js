const express = require('express')
const app = express()
app.use(express.json())

PORT=3000
app.listen(PORT,()=>{
    console.log(`PORT listening on ${PORT}`)
})

const expense = [
    {
        item: "burger",
        cost: 3000
    },
    {
        item: "nigger",
        cost: 200
    },
    {
        item: "footlettuce",
        cost: 6000
    }
]

app.get('/',(req,res)=>{
    res.json(expense)
})