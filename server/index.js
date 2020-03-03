const express = require('express'),
      port = 3001,
      app = express(),
      mc = require('./controller/message_controller')

app.use(express.json());

app.post(`/api/messages`, mc.create)
app.get(`/api/messages`, mc.read)
app.put(`/api/messages/:id`, mc.update)
app.delete(`/api/messages/:id`, mc.delete)

app.listen(port, ()=> console.log(`Server running on port: ${port}`));
