var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var usuarioRouter = require("./routes/usuario");
var residenteRouter = require("./routes/residente");
var administradorRouter = require("./routes/administrador");
var guardiaRouter = require("./routes/guardia");
var alicuotaRouter = require("./routes/alicuota");
var pagoRouter = require("./routes/pago");
var qrRouter = require("./routes/qr");
var urbanizacionRouter = require("./routes/urbanizacion");
var tokenRouter = require("./routes/token");
var cuentaRouter = require("./routes/cuentaBancaria");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/usuario", usuarioRouter);
app.use("/residente", residenteRouter);
app.use("/administrador", administradorRouter);
app.use("/guardia", guardiaRouter);
app.use("/alicuota", alicuotaRouter);
app.use("/pago", pagoRouter);
app.use("/qr", qrRouter);
app.use("/urbanizacion", urbanizacionRouter);
app.use("/token", tokenRouter);
app.use("/cuenta", cuentaRouter);

module.exports = app;
