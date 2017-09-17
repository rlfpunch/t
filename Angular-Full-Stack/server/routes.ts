import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import AlgorithmCtrl  from './controllers/algorithm';
import SiteCtrl  from './controllers/site';
import Cat from './models/cat';
import User from './models/user';
import Algorithm from './models/algorithm';
import Site from './models/site';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const algorithmCtrl = new AlgorithmCtrl();
  const siteCtrl = new SiteCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users/:userId').get(userCtrl.isAdmin, userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id/:userId').delete(userCtrl.isAdmin, userCtrl.delete);
  
  // algorithms
  router.route('/algorithms/:userId').get(algorithmCtrl.getAll);
  router.route('/algorithms/count').get(algorithmCtrl.count);
  router.route('/algorithm').post(algorithmCtrl.insert);
  router.route('/algorithm/:id').get(algorithmCtrl.get);
  router.route('/algorithm/:id').put(algorithmCtrl.update);
  router.route('/algorithm/:id').delete(algorithmCtrl.delete);
  
  // site
  router.route('/sites').get(siteCtrl.getAll);
  router.route('/sites/count').get(siteCtrl.count);
  router.route('/site/:userId').post(userCtrl.isAdmin, siteCtrl.insert);
  router.route('/site/:id').get(userCtrl.isAdmin, siteCtrl.get);
  router.route('/site/:id/:userId').put(userCtrl.isAdmin, siteCtrl.update);
  router.route('/site/:id/:userId').delete(userCtrl.isAdmin, siteCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
