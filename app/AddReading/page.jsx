"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  uploadBytes,
  getDownloadURL,
  ref as storageRef,
} from "firebase/storage";
import { storage } from "@/firebase";


const AddQuestionForm = () => {
  const [img, setImage] = useState("");
  const [number, setNumber] = useState(1);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [data, setData] = useState({
    id: null,
    type: "",
    content: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    solution: "Đang cập nhật....",
    type1: "", // Add the missing state.
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/Reading84/${number}`);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, [number]);

  const handleAddQuestion = async (id) => {
    console.log(data);
    const response = await fetch(`http://localhost:4000/Reading84/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setNumber(number + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Focus on the next input field on pressing Enter
    if (e.key === "Enter") {
      const inputFields = document.querySelectorAll("input, textarea");
      const currentIndex = Array.from(inputFields).findIndex(
        (field) => field.name === name
      );
      const nextIndex = currentIndex + 1;

      if (nextIndex < inputFields.length) {
        inputFields[nextIndex].focus();
      }
    }
  };

  const handleClick = async (file, id) => {
    try {
      const imgRef = storageRef(storage, "Reading/");
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      setImage(url);

      // Replace content with the image URL when an image is uploaded
      setData((prevData) => ({
        ...prevData,
        content: url,
      }));
    } catch (error) {
      console.error("Lỗi khi tải lên hình ảnh:", error);
    }
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...data.options];
    updatedOptions[index] = e.target.value;

    setData((prevData) => ({
      ...prevData,
      options: updatedOptions,
    }));
  };

  console.log(data)

  return (
    <div className="bg-slate-50 px-80">
      <Typography variant="h5" color="gray">
        Câu : {data.id}
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="subtitle1">Đề mục câu hỏi</Typography>
          <TextField
            fullWidth
            multiline
            name="type"
            value={data.type}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
          />
          <TextField
            fullWidth
            multiline
            name="type"
            value={data.type1}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1">Nội dung câu hỏi</Typography>
          <Stack justifyContent="center" textAlign="center">
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <img
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    maxHeight: "200px",
                  }}
                  src={img || data.content}
                  alt={`Question ${data.id}`}
                />
              </Grid>

              <Grid item xs={2}>
                <div className="bg-white items-center">
                  <label
                    htmlFor="fileInput"
                    style={{ cursor: "pointer", borderRadius: "4px" }}
                  >
                    <AddPhotoAlternateIcon
                      style={{ fontSize: "80px", color: "black" }}
                    />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={(event) =>
                      handleClick(event.target.files[0], data.id)
                    }
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Stack>
          <TextField
            name="content"
            value={data.content}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            fullWidth
            multiline
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1">Đáp án</Typography>
          {data.options?.map((option, index) => (
            <div key={index} class="flex">
              <Typography variant="subtitle" sx={{ width: "8px" }}>
                {index + 1}
              </Typography>
              <TextField
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
                onKeyDown={handleInputChange}
                fullWidth
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1">Đáp án đúng</Typography>
          <TextField
            name="correctAnswer"
            value={data.correctAnswer}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            fullWidth
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1">Hướng dẫn</Typography>
          <TextField
            name="solution"
            value={data.solution}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            fullWidth
          />
        </CardContent>
        <div class="flex justify-end pb-20">
          <Button onClick={() => handleAddQuestion(data.id)}>
            Lưu dữ liệu
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddQuestionForm;
