const express = require('express');
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')

const app = express()

// Middlewares
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.get('/', (req, res) => {
  res.redirect('/user')
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
})

app.use('/user', userRoutes)

app.use((req, res) => {
  res.status(404).render('notFound', {title: '404'})
})

app.listen(8000, () => console.log('Server listen on port 8000'))
