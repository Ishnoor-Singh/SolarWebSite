const router = require("express").Router();
const client = require("../config/influx.js");

router.post("/add", (req, res) => {
  let sID = req.body.sID;
  let tempValue = req.body.tempValue;
  let deviceString = req.body.device;

  client
    .write("temperatureSensor")
    .tag({
      sensorID: sID
    })
    .field({
      temperature: tempValue,
      measureDevice: deviceString
    })
    .then(() => console.info("write point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

router.post("/addBMS", (req, res) => {
  let sID = req.body.sID;
  let tempValue = req.body.tempValue;
  let voltage = req.body.voltage;
  client
    .write("BMS")
    .tag({
      sensorID: sID
    })
    .field({
      temperature: tempValue,
      voltage: voltage
    })
    .then(() => console.info("write BMS point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

router.post("/addAcc", (req, res) => {
  let sID = req.body.sID;
  let Zenith = req.body.Zenith;
  let Azimuth = req.body.Azimuth;
  client
    .write("accelerometer")
    .tag({
      sensorID: sID
    })
    .field({
      Zenith: Zenith,
      Azimuth: Azimuth
    })
    .then(() => console.info("write point success"))
    .catch(console.error);

  res.json({
    test: "arbitrary response"
  });
});

router.get("/query/all/:type", (req, res) => {
  let type = req.params.type;
  let reader = client.query(type);
  reader
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/query/entries/:type/:number", (req, res) => {
  let type = req.params.type;
  let number = req.params.number;
  let reader = client.query(type);
  reader.limit = number;
  reader
    .then(data => {
      res.send(JSON.stringify(data));
      console.log("GET success!");
    })
    .catch(err => {
      console.error(err);
    });
});

router.get("/query/time/:type/:time", (req, res) => {
  let type = req.params.type;
  let reader = client.query(type);
  let time = req.params.time;
  reader.start = "-" + time + "h";
  reader
    .then(data => {
      res.send(JSON.stringify(data));
      console.log("router.get /query/type/time success!");
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
