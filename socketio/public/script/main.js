var socket = io.connect('http://node.mywebclass.org');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
