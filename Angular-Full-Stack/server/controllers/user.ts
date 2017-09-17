import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  isAdmin = (req, res, next) => {
      this.model.findOne({ _id: req.params.userId }, (err, user) => {
          if (!user) { return res.sendStatus(403); }
          if(user.email === 'admin'){
              return next();
          }else{
              return res.sendStatus(403);
          }
      });
  }
  
  //Insert
  insert = (req, res) => {
    req.body.lv = 1;
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  // Update by id
  update = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, user) => {
      if (!user) { return console.error(err); }
      req.body.lv = user.lv;
      if(!req.body.apiKey || req.body.apiKey === 'Saved'){
          req.body.apiKey = user.apiKey;
      }
      this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
          if (err) { return console.error(err); }
          res.sendStatus(200);
      });
    });
  }
  
  //Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      if(obj.apiKey && obj.apiKey !== ""){
          obj.apiKey = 'Saved';
      }
      res.json(obj);
    });
  }
  
  //Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      docs.forEach(obj => {
          if(obj.apiKey && obj.apiKey !== ""){
              obj.apiKey = 'Saved';
          }
      });
      res.json(docs);
    });
  }
  
  //Delete by id
  deleteApiKey = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, user) => {
      if (!user) { return console.error(err); }
      user.apiKey = '';
      this.model.findOneAndUpdate({ _id: user._id }, user, (err) => {
          if (err) { return console.error(err); }
          res.sendStatus(200);
      });
    });
  }
}
