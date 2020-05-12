const mongoose = require("mongoose");

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

const User = mongoose.model("User", userSchema);

module.exports = { User };
