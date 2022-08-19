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
import { Box, Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


export default function OrderModal({
  handleClose,
  str,
  order,
  changeStatus,
  saveChange,
}) {
  return (
    // <Box sx={{width:"700px", height:"700px"}} >
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
        sx={{ m: 0, p: 5, width: "200px", height: "200px" }}
      >
        <Box display={"flex"} gap={2}>
          <Typography variant="h5"> نام:</Typography>
          <Typography variant="h6">{order.name}</Typography>
        </Box>
        <Box display={"flex"} gap={2}>
          <Typography variant="h5"> مجموع:</Typography>
          <Typography variant="h6">{order.sum}</Typography>
        </Box>
        <Box display={"flex"} gap={2}>
          <Typography variant="h5"> زمان:</Typography>
          <Typography variant="h6">{order.time}</Typography>
        </Box>
        {order.status ? (
            <Typography variant="h6" sx={{ background: "green" }}>
              تحویل داده شده است
            </Typography>
        ) : (
          <Button
            onClick={() => changeStatus(true)}
            sx={{ background: "green" }}
          >
            تحویل شد{" "}
          </Button>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            saveChange();
            handleClose();
          }}
        >
          ذخیره
        </Button>
      </DialogActions>
    </BootstrapDialog>
    // </Box>
  );
}
