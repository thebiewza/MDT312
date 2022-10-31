var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);

var fs = require('fs');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


// read from file to user
//ทำให้สมบูรณ์
app.get('/inmsg', async (req, res) => {
  console.log("in message");
  let readData = await readMsg();
  res.send(readData);
})

//from user, write data to file
//ทำให้สมบูรณ์
app.post('/outmsg', async (req, res) => {
  console.log("out message");
  const newMsg = req.body;
  let readDataMsg = await readMsg();
  let updateDataMsg = await updateMsg(newMsg, readDataMsg);
  let writeDataMsg = await writeMsg(updateDataMsg);
  res.send(writeDataMsg);
   
})

// read json data from file
//ทำให้สมบูรณ์
const readMsg = () => {
  console.log("read");

  return new Promise((resolve,reject) => {
    fs.readFile('log.json', 'utf8', (err, data) => {
      if (err)
        reject(err);
      else
      {
        console.log(data);
        resolve(data);
      }
    });
  })
} 

// update json data
//ทำให้สมบูรณ์
const updateMsg = (new_msg, data1) => {
  console.log("update");

  return new Promise((resolve,reject) => { 
    let newdata = JSON.parse(data1);
    newdata.dataMsg.push(new_msg);
    resolve(JSON.stringify(newdata));
  });
}

// write json data to file
//ทำให้สมบูรณ์
const writeMsg = (data) => {
  console.log("write");

  return new Promise((resolve,reject) => {
    fs.writeFile('log.json', data, (err) => {
      if (err)
        reject(err);
      else
      {
        resolve(data);
      }
    });

  })
};

var server = http.listen(3001, () => {
  console.log('server is running on port http://localhost:'+ server.address().port);
});