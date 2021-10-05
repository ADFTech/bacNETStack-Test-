// const bacnet = require('./bacstack');
const bacnet = require('./node-bacnet');
try {
  // Initialize BACStack
  const client = new bacnet({
    port: 47808,                          // Use BAC1 as communication port
    interface: '192.168.0.38',          // Listen on a specific interface
    broadcastAddress: '192.168.0.255',  // Use the subnet broadcast address
    adpuTimeout: 6000
  });

  //Call whoIS
  // client.whoIs({ net: 65535 });

  // Listening to iAm
  // client.on('iAm', (device) => {
  //   console.log("iAm", JSON.stringify(device));
  // });

  //Listening whoIs and response iAm
  // client.on('whoIs', (device) => {
  //   console.log("whoIs", device);
  //   client.iAmResponse(device.header.sender, 989, 3, 1);
  // });

  //Call whoHave
  // client.on('whoHas', (device) => {
  //   console.log("whoHas", JSON.stringify(device));
  //   // console.log('address: ', device.address, ' - deviceId: ', device.deviceId, ' - maxAdpu: ', device.maxApdu, ' - segmentation: ', device.segmentation, ' - vendorId: ', device.vendorId);
  //   client.iHaveResponse(device.header.sender, 1, 6, "BBC")
  // });

  // Unconfirmed UTC Time Synchronize
  // Device 4194302
  // client.timeSyncUTC({"address":"192.168.0.178","forwardedFrom":null},new Date(Date.UTC(2021,9,2)));
  // Device 1
  // client.timeSyncUTC({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] },new Date(Date.UTC(2021,9,2)));

  //Unconfirmed Time Synchronize
  //Device 4194302
  // client.timeSync({"address":"192.168.0.178","forwardedFrom":null},new Date());
  //Device 1
  // client.timeSync({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] },new Date());

  // Unconfirmed UTC Time Synchronize
  // Device 4194302
  // client.timeSyncUTC({"address":"192.168.0.178","forwardedFrom":null},new Date(Date.UTC(2021,9,2)));
  // Device 1
  // client.timeSyncUTC({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] },new Date(Date.UTC(2021,9,2)));

  // Read Property 
  // Device 4194302
  // client.readProperty({"address":"192.168.0.178","forwardedFrom":null},{type: 8, instance: 4194302},371,(err, value) => {
  //   console.log('value: ', value);
  // });
  // Device 1
  // client.readProperty({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] },{type: 17, instance: 0},38,(err, value) => {
  //   console.log('value: ', value);
  // });

  // ReadMultiple
  // Device 4194302
  // const requestArray = [
  //   { objectId: { type: 8, instance: 4194302 }, properties: [{ id: 8 }] }
  // ];
  // client.readPropertyMultiple({ "address": "192.168.0.178", "forwardedFrom": null}, requestArray, (err, value) => {
  //   console.log('value: ', value);
  // });
  // Device 1
  // const requestArray2 = [
  //   { objectId: { type: 17, instance: 1 }, properties: [{ id: 8 }] }
  // ];
  // client.readPropertyMultiple({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] }, requestArray2, (err, value) => {
  //   console.log('value: ', value);
  // });

  // Read Range 
  // Device 4194302
  // client.readRange({"address":"192.168.0.178","forwardedFrom":null},{type: 20, instance: 0},0,20,(err, value) => {
  //   console.log('value: ', value);
  // console.log('err', err);
  // });
  // Device 1
  // client.readRange({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] },{type: 20, instance: 0},1,20,(err, value) => {
  //   console.log('value: ', value);
  //   // console.log('Buffer: ',value.rangeBuffer.toString("utf8"));
  // });

  // WriteProperty
  // Device 4194302
  // client.writeProperty({ "address": "192.168.0.178", "forwardedFrom": null }, {type: 1, instance: 0}, 85, [
  //   {type: bacnet.enum.ApplicationTag.REAL, value: 100}
  // ], (err, value) => {
  //   console.log('value: ', value);
  //   console.log('err: ', err);
  // });
  // Device 1
  // client.writeProperty({ "address": "192.168.0.178", "forwardedFrom": null, "net": 20, "adr": [1, 0, 0, 0, 0, 0] }, {type: 1, instance: 0}, 85, [
  //   {type: bacnet.enum.ApplicationTag.REAL, value: 100}
  // ], (err, value) => {
  //   console.log('value: ', value);
  //   console.log('err: ', err);
  // });


} catch (error) {
  console.log("error", error);
}

