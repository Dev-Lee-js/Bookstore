const dotenv = require('dotenv');
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const MySQLStore = require('express-mysql-session')(session);
const {options} = require("./mariadb");
const sessionStore = new MySQLStore(options);

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000',  // 허용할 도메인
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // 허용할 HTTP 메서드
  credentials: true,  // 쿠키와 같은 인증 정보를 전송할 수 있도록 허용
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true
    },
  })
);

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likeRouter = require('./routes//likes');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');
const categoryRouter = require("./routes/categories");

app.use("/", userRouter);
app.use("/books", bookRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
app.use("/category", categoryRouter);


