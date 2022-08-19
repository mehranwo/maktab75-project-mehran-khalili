import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { addProduct } from "../../redux/actions/productsActions";
import { postData } from "api/api";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddModal({
  handleClose,
  str,
  order,
  changeStatus,
  saveChange,
  getAllData,
  count
}) {
    
  const dispatch = useDispatch();
  const product = useSelector((state) => state.addProduct);
  const [selectedFile, setSelectedFile] = React.useState("");

  ///////////////////////
  //file upload
  ///////////////////////
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const savaChange = async () => {
    await postData("products", product);
    getAllData("products");
  };

  const onFileUpload = () => {
    const formData = new FormData();
    //@ts-ignore
    formData.append("image", selectedFile, selectedFile.name);

    postData("upload", formData).then((res) => {
      console.log(res);
      if (product.src) {
        dispatch(
          addProduct({
            ...product,
            src: [...product.src, res.filename],
          })
        );
      } else {
        dispatch(
          addProduct({
            ...product,
            src: [res.filename],
          })
        );
      }
    });
  };
  //
  return (
    <BootstrapDialog
      onClose={() => handleClose()}
      aria-labelledby="customized-dialog-title"
      open={str}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {handleClose ? (
          <IconButton
            aria-label="close"
            onClick={() => handleClose()}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        بررسی
      </DialogTitle>
      <DialogContent
        dividers
        sx={{ m: 0, p: 2, width: "600px", height: "600px" }}
      >
        <FormControl>
          <Box>
            <TextField
              id="file"
              type="file"
              label="تصویر کالا"
              placeholder=" "
              multiple={true}
              onChange={onFileChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            ></TextField>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onFileUpload();
              }}
            >
              <SendRoundedIcon />
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", mb: "10px", mt: "2px" }}>
            {product.src &&
              product.src.map((data) => {
                return (
                  <Box
                    key={data}
                    sx={{ width: "50px", height: "70px", position: "relative" }}
                  >
                    <img
                      src={`http://localhost:3003/files/${data}`}
                      alt="product"
                      width={"100%"}
                      height={"100%"}
                    />
                    <Box
                      id={data}
                      sx={{
                        position: "absolute",
                        top: "0",
                        width: "20px",
                        height: "20px",
                        "&:hover": { color: "red" },
                      }}
                      onClick={(e) => {
                        let id = e.currentTarget.id;
                        let filteredSrc = product.src.filter(
                          (item) => item !== id
                        );
                        dispatch(
                          addProduct({
                            ...product,
                            src: filteredSrc,
                          })
                        );
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 120, flex: "1" }}>
              <InputLabel id="demo-simple-select-helper-label">نوع</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={product.gender}
                label="Age"
                onChange={(event) =>
                  dispatch(
                    addProduct({ ...product, gender: event.target.value })
                  )
                }
              >
                <MenuItem value={"مردانه"}>مردانه</MenuItem>
                <MenuItem value={"زنانه"}>زنانه</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, flex: "1" }}>
              <InputLabel id="demo-simple-select-helper-label">
                دسته بندی
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={product.subcategory}
                label="subcategory"
                onChange={(event) =>
                  dispatch(
                    addProduct({ ...product, subcategory: event.target.value })
                  )
                }
              >
                <MenuItem value={"shoe"}>کفش</MenuItem>
                <MenuItem value={"sneakers"}>کتونی</MenuItem>
                <MenuItem value={"jackets"}>ژاکت</MenuItem>
                <MenuItem value={"pants"}>شلوار</MenuItem>
                <MenuItem value={"shirt"}>تیشرت</MenuItem>
                <MenuItem value={"sweater"}>سوییشرت</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              variant="outlined"
              value={Number(count) +1}
              sx={{ m: 1, minWidth: 120, flex: "1" }}
              disabled
            />
            <TextField
              label="نام محصول"
              variant="outlined"
              value={product.productName}
              onChange={(event) =>
                dispatch(
                  addProduct({ ...product, productName: event.target.value })
                )
              }
              sx={{ m: 1, minWidth: 120, flex: "1" }}
              required
            />
            <TextField
              label="برند"
              variant="outlined"
              value={product.brand}
              onChange={(event) =>
                dispatch(addProduct({ ...product, brand: event.target.value }))
              }
              sx={{ m: 1, minWidth: 120, flex: "1" }}
              required
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              label="موجودی"
              variant="outlined"
              value={product.stock}
              onChange={(event) =>
                dispatch(addProduct({ ...product, stock: event.target.value }))
              }
              sx={{ m: 1, minWidth: 120, flex: "1" }}
              required
            />
            <TextField
              label="قیمت"
              variant="outlined"
              value={product.price}
              onChange={(event) =>
                dispatch(addProduct({ ...product, price: event.target.value }))
              }
              sx={{ m: 1, minWidth: 120, flex: "1" }}
              required
            />
          </Box>
          <Box sx={{ mt: "10px", width: "100%" }}>
            <JoditEditor
              onChange={(content) => {
                dispatch(
                  addProduct({
                    ...product,
                    description: content,
                  })
                );
              }}
              value={product.description}
            />
          </Box>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            savaChange();
            handleClose();
          }}
        >
          ذخیره
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
