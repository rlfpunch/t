import Algorithm from '../models/algorithm';
import BaseCtrl from './base';

export default class AlgorithmCtrl extends BaseCtrl {
  model = Algorithm;
  
  //Get all
  getAll = (req, res) => {
    this.model.find({userId:req.params.id}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }
}
