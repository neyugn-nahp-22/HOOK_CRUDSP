const Models = require("../model/index");
const xlsx = require("xlsx");
const fs = require("fs");
const Excel = require("exceljs");

exports.getStudent = async (req, res) => {
  try {
    let getData = await Models.find({});
    res.send({
      getData,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.addStudent = async (req, res) => {
  try {
    let name = req.body;
    await Models.create(name);
    res.send({
      message: "Success",
    });
  } catch (error) {
    res.send(error);
  }
};

exports.delStudent = async (req, res) => {
  try {
    let id = req.params.id;
    await Models.findByIdAndDelete(id);
    res.send({ message: "Success" });
  } catch (error) {
    res.send(error);
  }
};

exports.putStudent = async (req, res) => {
  try {
    let name = req.body.name;
    let id = req.params.id;
    await Models.findByIdAndUpdate(id, { name: name });
    res.send({ message: "Success" });
  } catch (error) {
    res.send(error);
  }
};

exports.addExcel = async (req, res) => {
  try {
    let file = req.files;

    let wb = xlsx.readFile(file[0].path);
    let ws = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

    Models.insertMany(ws, (error, data) => {
      res.send({ ws, message: "success" });
    });
  } catch (error) {
    res.send(error);
  }
};

exports.downloadExcel = async (req, res) => {
  Models.find().then(async (objs) => {
    let tutorials = [];
    let counter = 0;
    objs.forEach((obj) => {
      obj.id = counter;
      counter++;
      tutorials.push({
        id: counter,
        name: obj.name,
        age: obj.age,
      });
    });

    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");

    worksheet.columns = [
      { header: "Id", key: "id", width: 25 },
      { header: "Name", key: "name", width: 25 },
      { header: "Age", key: "age", width: 25 },
    ];

    worksheet.addRows(tutorials);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "tutorials.xlsx"
    );

    await workbook.xlsx.write(res);
    res.status(200).end();
  });
};
