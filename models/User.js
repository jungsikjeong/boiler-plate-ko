const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1, // 똑같은 이메일은 쓰지못하게끔
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 관리자 설정 Ex) 1은 관리자,0은 일반유저
    type: Number,
    default: 0,
  },
  image: String, // 유저 이미지
  token: {
    // 유효성 검사
    type: String,
  },
  tokenExp: {
    // token 유효기간 설정
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this; // User모델자체를 가르킴

  // isModified: password가 변경될때
  if (user.isModified("password")) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });

    next();
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword:1234567 암호화된 비밀번호: 231wesd2
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;

  // jsonwebtoken을 이용해서 토큰을 생성하기
  var token = jwt.sign(user._id.toHexString(), "secretToken");

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
