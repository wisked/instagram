const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth.service');
const authService = new AuthService();


authService.createAdmin();

router.post('/signup', async (req, res) => {
  let user;
  try {
    user = await authService.signUp(req.body);
    
  } catch (error) {
    res.status(503).json({msg: error.message})
  }
  res.status(200).append('Authorization', `Bearer ${user.token}`).json(user);
});

router.post('/login', async (req, res) => {
  const user = await authService.logIn(req.body);
  res.status(200).json(user);

});

module.exports = router;