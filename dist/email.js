"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'mohitop1234567890@gmail.com',
        pass: 'pcbfiyrbxquiqiur'
    }
});
function sendEmail(to, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const info = yield transporter.sendMail({
            from: 'mohitop1234567890@gmail.com',
            to,
            subject: "Hello",
            text: body
        });
    });
}
