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
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var express = require("express");
var client_1 = require("@prisma/client");
var bodyParser = require("body-parser");
var mongodb_1 = require("mongodb");
var router = express.Router();
exports.apiRouter = router;
var prisma = new client_1.PrismaClient();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var uri = "mongodb+srv://".concat(process.env.MONGO_LOGIN, ":").concat(process.env.MONGO_PASS, "@cluster0.dzcwp18.mongodb.net/?retryWrites=true&w=majority");
var notFoundError = {
    error: "404",
    message: "Not Found."
};
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
//GET dla wszystkich obiektów:
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
//POST, PUT, PATCH, DELETE dla modelu psy
router.post('/psy', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.name) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.psy.create({
                        data: {
                            name: req.body.name.toString()
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
router.put('/psy/:id/:name', urlencodedParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params.name) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.psy.update({
                        where: {
                            id: Number(req.params.id)
                        },
                        data: {
                            name: req.params.name
                        }
                    }).then(function () {
                        res.json({ message: "Dog updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog not found." });
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
router.patch('/psy/:id/:name', urlencodedParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params.name) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.psy.update({
                        where: {
                            id: Number(req.params.id)
                        },
                        data: {
                            name: req.params.name
                        }
                    }).then(function () {
                        res.json({ message: "Dog updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog not found." });
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
router.delete('/psy/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params.id) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.psy.delete({
                        where: {
                            id: Number(req.params.id)
                        }
                    }).then(function () {
                        res.json({ message: "Dog deleted." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog not found." });
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
//POST, PUT, PATCH, DELETE dla modelu karmienie
router.post('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, dogId, keeperId, time, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!dogId || !keeperId || !time) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.karmienie.create({
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.status(201).json({ message: "New feeding added." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, dogId, keeperId, time, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.karmienie.update({
                        where: {
                            id: id
                        },
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.json({ message: "Feeding updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Feeding not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.patch('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, dogId, keeperId, time, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.karmienie.update({
                        where: {
                            id: id
                        },
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.json({ message: "Feeding updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Feeding not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.delete('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.karmienie.delete({
                        where: {
                            id: id
                        }
                    }).then(function () {
                        res.json({ message: "Feeding deleted." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Feeding not found." });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//POST, PUT, PATCH, DELETE dla modelu opiekunowie
router.post('/opiekunowie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, dogId, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, dogId = _a.dogId;
                if (!firstName || !lastName || !dogId) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.opiekunowie.create({
                        data: {
                            firstName: firstName,
                            lastName: lastName,
                            dogId: dogId
                        }
                    }).then(function () {
                        res.status(201).json({ message: "New keeper added." });
                    }).catch(function (err) {
                        throw err;
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_5 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/opiekunowie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, firstName, lastName, dogId, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, dogId = _a.dogId;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.opiekunowie.update({
                        where: {
                            id: id
                        },
                        data: {
                            firstName: firstName,
                            lastName: lastName,
                            dogId: dogId
                        }
                    }).then(function () {
                        res.json({ message: "Keeper updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Keeper not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_6 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.patch('/opiekunowie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, firstName, lastName, dogId, err_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, dogId = _a.dogId;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.opiekunowie.update({
                        where: {
                            id: id
                        },
                        data: {
                            firstName: firstName,
                            lastName: lastName,
                            dogId: dogId
                        }
                    }).then(function () {
                        res.json({ message: "Keeper updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Keeper not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_7 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.delete('/karmienie', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.opiekunowie.delete({
                        where: {
                            id: id
                        }
                    }).then(function () {
                        res.json({ message: "Keeper deleted." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Keeper not found." });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//POST, PUT, PATCH, DELETE dla modelu psy_dane
router.post('/psy_dane', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, weight, breed, err_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, weight = _a.weight, breed = _a.breed;
                if (!id || !weight || !breed) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.psy_dane.create({
                        data: {
                            id: id,
                            weight: weight,
                            breed: breed
                        }
                    }).then(function () {
                        res.status(201).json({ message: "New dog data added." });
                    }).catch(function (err) {
                        throw err;
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_9 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/psy_dane', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, weight, breed, err_10;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, weight = _a.weight, breed = _a.breed;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.psy_dane.update({
                        where: {
                            id: id
                        },
                        data: {
                            weight: weight,
                            breed: breed
                        }
                    }).then(function () {
                        res.json({ message: "Dog data updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog data not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_10 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.patch('/psy_dane', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, weight, breed, err_11;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, weight = _a.weight, breed = _a.breed;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.psy_dane.update({
                        where: {
                            id: id
                        },
                        data: {
                            weight: weight,
                            breed: breed
                        }
                    }).then(function () {
                        res.json({ message: "Dog data updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog data not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_11 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.delete('/psy_dane', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.psy_dane.delete({
                        where: {
                            id: id
                        }
                    }).then(function () {
                        res.json({ message: "Dog data deleted." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Dog data not found." });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_12 = _a.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//POST, PUT, PATCH, DELETE dla modelu spacery
router.post('/spacery', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, dogId, keeperId, time, err_13;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!dogId || !keeperId || !time) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.spacery.create({
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.status(201).json({ message: "New walk added." });
                    }).catch(function (err) {
                        throw err;
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_13 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/spacery', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, dogId, keeperId, time, err_14;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.spacery.update({
                        where: {
                            id: id
                        },
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.json({ message: "Walk updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Walk not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_14 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.patch('/spacery', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, dogId, keeperId, time, err_15;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, dogId = _a.dogId, keeperId = _a.keeperId, time = _a.time;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.spacery.update({
                        where: {
                            id: id
                        },
                        data: {
                            dogId: dogId,
                            keeperId: keeperId,
                            time: time
                        }
                    }).then(function () {
                        res.json({ message: "Walk updated." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Walk not found." });
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_15 = _b.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.delete('/spacery', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, err_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.spacery.delete({
                        where: {
                            id: id
                        }
                    }).then(function () {
                        res.json({ message: "Walk deleted." });
                    }).catch(function (err) {
                        res.json({ error: 404, message: "Walk not found." });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_16 = _a.sent();
                res.status(500).json({ error: 500, message: "Server problem." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//Wysyłanie danych do nierelacyjnej bazy danych MongoDB
router.post('/mongo/:collection', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var collection, db, dbo, obj, e_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                collection = req.params.collection;
                if (!collection) {
                    res.status(400).json({ error: 400, message: "Incorrect input data." });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, mongodb_1.MongoClient.connect(uri)];
            case 2:
                db = _a.sent();
                return [4 /*yield*/, db.db("20_11")];
            case 3:
                dbo = _a.sent();
                obj = req.body;
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, dbo.collection(collection).insertOne(obj)];
            case 5:
                _a.sent();
                console.log("New data added to ".concat(collection, " collection."));
                res.json({ message: "New data added to ".concat(collection, " collection.") });
                return [3 /*break*/, 7];
            case 6:
                e_1 = _a.sent();
                throw e_1;
            case 7: return [4 /*yield*/, db.close()];
            case 8:
                _a.sent();
                return [3 /*break*/, 10];
            case 9:
                e_2 = _a.sent();
                throw e_2;
            case 10: return [2 /*return*/];
        }
    });
}); });
