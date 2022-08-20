import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

//styles
const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "100px 0px",
  gap: "30px",
};

export default function CategoryHome() {
    const navigete = useNavigate()
  return (
    <Box style={container}>
        <Box
          sx={{
            flex: "1",
            cursor: "pointer",
            position: "relative",
            transition: "0.5s all",
            "&:hover": { transform: "scale(1.025)" },
            "&:hover .category_photo": { opacity: 5 },
          }}
          onClick={()=>{
            navigete('/categories/menProduct')
          }}
        >
          <Box>
            <img
              src="./images/category/men-cat.jpg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "99%",
              background: "#00000030",
              opacity: 0,
              transition: "0.5s all",
            }}
            className={"category_photo"}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "75%",
                left: "65%",
                transform: "translate(-50% , -50%)",
                fontSize: "180px",
                color: "#d5d5d5",
                width: "100%",
                height: "100%",
              }}
            >
              مردانه
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            cursor: "pointer",
            position: "relative",
            transition: "0.5s all",
            "&:hover": { transform: "scale(1.025)" },
            "&:hover .category_photo": { opacity: 5 },
          }}
          onClick={()=>{
            navigete('/categories/womenProduct')
          }}
        >
          <Box>
            <img
              src="./images/category/women-cat.jpg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "99%",
              background: "#00000030",
              opacity: 0,
              transition: "0.5s all",
            }}
            className={"category_photo"}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "75%",
                left: "75%",
                transform: "translate(-50% , -50%)",
                fontSize: "180px",
                color: "#d5d5d5",
                width: "100%",
                height: "100%",
              }}
            >
              زنانه
            </Typography>
          </Box>
        </Box>
    </Box>
  );
}
