const Express= require('express')
const dotenv=require('dotenv')
const cors= require('cors')
// --> Importar las rutas de login
const RutasLogin=require('./src/Router/Login.Route')

const App=Express()

dotenv.config()

const PORT=process.env.PORT || 3000

App.use(cors())
App.use(Express.json())

// --> Rutas de login
App.use('/api',RutasLogin)

App.listen(PORT,()=>{
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`)
})