import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as fs from "file-saver";
import React, { useEffect, useState } from "react";
import { UseStudent } from "../hooks";
import "./studentComponent.css";

const Excel = require("exceljs");
export default function StudentComponent() {
  const {
    listStudentss,
    handleGetStudents,
    handleAddStudents,
    handleDelStudent,
    handlePutStudent,
    handleImportExcel,
  } = UseStudent();

  useEffect(() => {
    handleGetStudents();
  }, []);
  const [name, setName] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [day, setDay] = useState([]);
  const [timeWork, setTimeWork] = useState([]);
  const [dateAll, setDateAll] = useState([]);
  const [file, setFile] = useState([]);
  const [idLock, setIdLock] = useState([]);

  const handleId = (a) => {
    const idLockNew = [...idLock];
    if (idLockNew.includes(a)) {
      idLockNew.splice(idLockNew.indexOf(a), 1);
    } else {
      idLockNew.push(a);
    }
    console.log(idLockNew);
    setIdLock({ idLock: idLockNew });
  };

  const handleExport = async (sheetName) => {
    const setExport = listStudentss.filter((item) => idLock.includes(item._id));
    listStudentss.map((item, key) => (item._id = key + 1));

    const workbook = new Excel.Workbook();
    const workSheet = workbook.addWorksheet(sheetName);

    const columns = Object.keys(listStudentss[0]).map((items) => ({
      name: items,
    }));

    const rows = setExport.map((entry) => Object.values(entry));

    workbook.getWorksheet("sheet1").addTable({
      name: "sheet1",
      ref: "H1",
      columns,
      rows,
    });

    workSheet.eachRow((row, rowNubmer) => {
      row.eachCell((cell) => {
        console.log(rowNubmer);
        if (rowNubmer === 1) {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFFF02" },
          };
        }
      });

      row.commit();
    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      fs.saveAs(blob, "Example.xlsx");
    });
  };

  const handleExportAll = async (sheetName) => {
    listStudentss.map((item, key) => (item._id = key + 1));

    const workbook = new Excel.Workbook();
    const ws = workbook.addWorksheet(sheetName);

    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }
    const daysInDecember = getDaysInMonth(2022, 12);

    for (let i = 1; i <= daysInDecember; i++) {
      if (i < 10) {
        dateAll.push("0" + i + "/" + "12");
      } else {
        dateAll.push(i + "/" + "12");
      }
    }

    ws.addRow(dateAll);

    const Day = {
      0: "CN",
      1: "T2",
      2: "T3",
      3: "T4",
      4: "T5",
      5: "T6",
      6: "T7",
    };

    for (let i = 1; i <= 31; i++) {
      day.push(Day[new Date(`December ${i}, 2022 00:00:00`).getDay()]);
    }
    ws.addRow(day);

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      fs.saveAs(blob, "Example.xlsx");
    });
  };

  return (
    <>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <TextField onChange={(e) => setName(e.target.value)} value={name} />
          <Button
            endIcon={<SendIcon />}
            variant="contained"
            onClick={() => handleAddStudents({ name: name })}
          >
            ADD
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            onChange={(e) => setNameUpdate(e.target.value)}
            value={nameUpdate}
          />
          <Button
            endIcon={<SendIcon />}
            variant="contained"
            onClick={() => handlePutStudent({ name: nameUpdate, id: idUpdate })}
          >
            UPDATE
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            type="file"
            onChange={(e) => setFile({ file: e.target.files })}
          />
          <Button
            startIcon={<FileUploadIcon />}
            variant="contained"
            onClick={() => handleImportExcel({ file: file })}
          >
            IMPORT
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            startIcon={<DownloadIcon />}
            color="success"
            variant="contained"
            onClick={() => handleExportAll()}
          >
            DOWNLOAD ALL
          </Button>
          <Button
            startIcon={<DownloadIcon />}
            color="success"
            variant="contained"
            onClick={() => handleExport()}
          >
            DOWNLOAD
          </Button>
        </Stack>
      </Stack>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>ACTION</TableCell>
            <TableCell>CHECK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listStudentss.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">
                  <Stack className="action" direction="row" spacing={2}>
                    <Button
                      color="error"
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      onClick={() => handleDelStudent({ id: item._id })}
                    >
                      DELETE
                    </Button>
                    <Button
                      startIcon={<EditIcon />}
                      color="warning"
                      variant="contained"
                      onClick={() => {
                        setNameUpdate(item.name);
                        setIdUpdate(item._id);
                      }}
                    >
                      EDIT
                    </Button>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Checkbox
                    onClick={() => handleId(item._id)}
                    value={item._id}
                    checked={idLock.includes(item._id)}
                    onChange={() => {}}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
