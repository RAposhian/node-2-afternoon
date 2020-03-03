const messages= [];
let id = 0;


module.exports = {
   create: (req, res) => {
      const {text, time} = req.body;
      const message = {
         id,
         text, 
         time
      }
      messages.push(message);
      id+= 1;
      res.status(200).send(messages);
   },
   read: (req, res) => {
      res.status(200).send(messages);
   },
   update: (req, res) => {
      const {id} = req.params
      // console.log(id)
      let messageObj = messages.find(e =>  e.id === +id);
      // console.log(messageObj.id)
      messageObj = {
         id: messageObj.id,
         text: req.body.text || messageObj.text,
         time: messageObj.time
      }
      // console.log(messageObj)
      res.status(200).send(messages)
   },
   delete: (req, res) => {
      const {id} = req.params
      let index = messages.findIndex(e => +id === e.id);
      messages.splice(index, 1);
      res.status(200).send(messages)
   }

}