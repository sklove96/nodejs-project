// 채팅방 스키마

const mongoose = require('mongoose');

const { Schema } = mongoose;
const roomSchema = new Schema({
    title: { //방 제목
        type: String,
        required: true,
    },
    max: { //최대 수용 인원
        type: Number,
        required: true,
        default: 10, // 10명
        min: 2,
    },
    owner: { //방장
        type: String,
        required: true,
    },
    password: String, //비밀번호 (설정 시 비밀방, 안하면 공개방)
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Room', roomSchema);