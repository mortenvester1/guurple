const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const logger = require("morgan");
const session = require("express-session");
const VjsRouter = require("./server/api/index");
//const Security = require("./utils/security");

const PORT = process.env.VJS_API_PORT || 8080;
const app = express();
app.use(cors());


app.set("trust proxy", 1);
app.use(logger("dev"));
app.use(cookieParser());


app.use(bodyParser.urlencoded({
  limit: "10mb",
  extended: true,
  parameterLimit: 1024000
}));

app.use(bodyParser.json({
  limit: "10mb",
  extended: true
}));

//app.use("/api", Security, VjsRouter);
app.use("/api", VjsRouter);

// Generic Error Handler
// app.use(function (err, req, res, next) {
//   console.error('[app.use]', err.stack)
//   res.status(500).send('Something broke!')
// })

// catch 404 and forward to error handler
// app.use(function (err, req, res, next) {
//   console.log('[app.use] 404', err.stack);
//   next(createError(404));
// });


//joi error handler
// app.use((err, req, res, next) => {
//   console.log('[app.use] joi', err.stack);
//   if (err && err.error && err.error.isJoi) {
//     return res.json({
//       error: {
//         code: 400,
//         message: err.error.toString(),
//       },
//     });
//   } else {
//     next(err);
//   }
// });

app.listen(PORT, function() {
  console.log(`[app] Listening on ${PORT}`);
});
