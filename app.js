if (process.env.NODE_ENV != 'production') {
    require ('dotenv').config()
}
const express = require ('express')
const app = express ()
const router = require ('./routes')
const cors = require ('cors')
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(PORT, function (){
    console.log(`listening port: ${port}`)
})