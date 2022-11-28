"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectToDB() {
    mongoose_1.default
        .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    })
        .then((db) => {
        console.log("Database Connected Successfuly.");
    })
        .catch((err) => {
        console.log("Error Connectiong to the Database");
    });
}
exports.connectToDB = connectToDB;
