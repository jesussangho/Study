// User모듈을 생성, 회원가입, 사는 곳, 나이 > UserDataBase 보관하기 위해 userSchema 생성
// model을 스키마를 감싸주는 역할

// mongoose 모델을 가져옴
const mongoose = require("mongoose");

// mongoose를 이용하여 스키마 생성
const userSchema = mongoose.Schema({
  // 글을 작성한 사람
  name: {
    type: String,
    maxlength: 50,
  },
  // email 정보
  email: {
    type: String,
    // 스페이스 역할을 없애줌
    trim: true,
    // 똑같은 email을 쓰지 못하게
    unique: 1,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  // user가 관리자 or 일반 user가 될 수도 있음
  // Number 1 : 관리자, 0 : 일반 user
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  // token을 통해 유효성 관리
  token: {
    type: String,
  },
  // tokenExp 유효기간
  tokenExp: {
    type: Number,
  },
});

// 스키마를 모델로 감싸줌
const User = mongoose.model("User", userSchema);

// 다른 파일에서도 쓸 수 있게
module.exports = { User };
