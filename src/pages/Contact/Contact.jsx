import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "layout/layout";
import React, { useState } from "react";


export default function Contact() {
  const [detail, setDetail] = useState({
    name:"",
    email:""
  });
  const [description, setDescription] = useState("");
  return (
    <Layout>
      <Box display={'flex'} gap={2} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"} padding={'10rem'}>

        <Box sx={{height:"400px", padding:"10px" ,flex:"1" }} alignItems={'center'} justifyContent={"center"}>
          <form sx={{width:"100%"}} >
            <Typography variant="h5" sx={{margin:"10px 0px"}}>نظرات خود را برای ما ارسال کنید</Typography>
            <TextField
            label={"نام"}
              value={detail.name}
              onChange={(e) => setDetail({...detail , name:e.target.value})}
              required
              fullWidth
              
            />
            <TextField
            label={"ایمیل"}
              value={detail.email}
              onChange={(e) => setDetail({...detail , email:e.target.value})}
              required
              fullWidth
              sx={{margin:"1rem 0"}}
            />
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
              sx={{"& .MuiInputBase-input":{height:"100px"} , marginBottom:"1rem"}}
            />
            <Button type="submit" variant="contained" fullWidth>ارسال</Button>
          </form>
        </Box>
        <Box sx={{flex:"1"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.018702246571!2d51.34697721443186!3d35.70115738018964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011674d66301%3A0xf3ff37361b48e2f5!2sMaktab%20Sharif!5e0!3m2!1sen!2snl!4v1661383624715!5m2!1sen!2snl" width="100%" height="400px"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </Box>
    </Layout>
  );
}
