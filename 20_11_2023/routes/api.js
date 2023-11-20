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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
var express = require("express");
var client_1 = require("@prisma/client");
var bodyParser = require("body-parser");
var router = express.Router();
exports.apiRouter = router;
var prisma = new client_1.PrismaClient();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var notFoundError = {
    error: "404",
    message: "Not Found."
};
router.get('/psy', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dogs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.psy.findMany()];
            case 1:
                dogs = _a.sent();
                if (dogs) {
                    res.json(dogs);
                }
                else {
                    res.json(notFoundError);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var feeding;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.karmienie.findMany()];
            case 1:
                feeding = _a.sent();
                if (feeding) {
                    res.json(feeding);
                }
                else {
                    res.json(notFoundError);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/opiekunowie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var keepers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.opiekunowie.findMany()];
            case 1:
                keepers = _a.sent();
                if (keepers) {
                    res.json(keepers);
                }
                else {
                    res.json(notFoundError);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/psy_dane', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dogsData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.psy_dane.findMany()];
            case 1:
                dogsData = _a.sent();
                if (dogsData) {
                    res.json(dogsData);
                }
                else {
                    res.json(notFoundError);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get('/spacery', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var walks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.spacery.findMany()];
            case 1:
                walks = _a.sent();
                if (walks) {
                    res.json(walks);
                }
                else {
                    res.json(notFoundError);
                }
                return [2 /*return*/];
        }
    });
}); });
router.post('/psy/:name', urlencodedParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params.name) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.psy.create({
                        data: {
                            name: req.params.name.toString()
                        }
                    }).then(function () {
                        res.json({ message: "Dog added." });
                    }).catch(function (err) {
                        throw err;
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
