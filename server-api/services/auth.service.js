const argon = require('argon2');
const jwt = require('jsonwebtoken');

const { signature } = require('../config');
const User = require('../models/user.model');


class AuthService {
  async signUp({ email, password, name }) {
    const isExistuserRecord = await User.findOne({ email });
    if (isExistuserRecord) throw new Error('User with current email already exist');
    const passwordHashed = await argon.hash(password);

    const userRecord = await User.create({
      password: passwordHashed,
      email,
      name,
      isAdmin: false,
    });
    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
        isAdmin: userRecord.isAdmin,
      },
      token: this.generateToken(userRecord),
    };
  }

  async logIn({ email, password }) {
    const userRecord = await User.findOne({ email });
    if (!userRecord) {
      throw new Error(`user no found`)
    } else {
      const correctPassword = await argon.verify(userRecord.password, password);
      if (!correctPassword) throw new Error(`incorrect password`)
      console.log({
        user: {
          email: userRecord.email,
          name: userRecord.name,
          isAdmin: userRecord.isAdmin,
        },
        token: this.generateToken(userRecord),
      })
      return {
        user: {
          email: userRecord.email,
          name: userRecord.name,
          isAdmin: userRecord.isAdmin,
        },
        token: this.generateToken(userRecord),
      }
    }
  }

  generateToken(user) {
    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    const expiration = '6h';

    return jwt.sign({ data }, signature, { expiresIn: expiration });
  }

  async createAdmin() {
    const adminRecord = await User.findOne({ $or: [{ isAdmin: true }, { email: 'admin@admin' }] });
    if (!adminRecord) {
      const passwordHashed = await argon.hash('admin');

      await User.create({
        password: passwordHashed,
        email: 'admin@admin',
        name: 'admin',
        isAdmin: true,
      });
    }
  }
}

module.exports = AuthService;