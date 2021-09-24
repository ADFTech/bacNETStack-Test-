const bacnet = require('./bacstack');
// const bacnet = require('node-bacnet');
try {
  // Initialize BACStack
  const client = new bacnet({
    port: 47808,                          // Use BAC1 as communication port
    interface: '192.168.0.38',          // Listen on a specific interface
    broadcastAddress: '192.168.0.255',  // Use the subnet broadcast address
    adpuTimeout: 6000
  });

  client.whoIs();

  client.on('iAm', (device) => {
    // console.log(device);
    // console.log('address: ', device.address, ' - deviceId: ', device.deviceId, ' - maxAdpu: ', device.maxApdu, ' - segmentation: ', device.segmentation, ' - vendorId: ', device.vendorId);
  });

  const requestArray = [
    { objectId: { type: 6, instance: 2 }, properties: [{ id: 8 }] }
  ];
  client.readPropertyMultiple('192.168.0.100', requestArray, (err, value) => {
    console.log('value: ', value);
  });

} catch (error) {
  console.log("error", error);
}



// // Read Device Object
// const requestArray = [{
//   objectId: {type: 8, instance: 4194303},
//   properties: [{id: 8}]
// }];
// client.readPropertyMultiple('192.168.1.43', requestArray, (err, value) => {
//   console.log('value: ', value);
// });