const Model = require("./modul");
const { app } = require("./server");

app.post('/id', (req, res) => {
  let { token, note_id } = req.body;
  // let token=req.body;
  const play = async () => {
    let data = await Model.find({ token, id: note_id });
    res.send(data);
  };
  play();
});
