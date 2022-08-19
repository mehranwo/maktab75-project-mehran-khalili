import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme/index";
import  FacebookIcon  from "@mui/icons-material/Facebook";
import  TwitterIcon  from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram"
import SendIcon from "@mui/icons-material/Send"


export default function Footer() {
  return (
    <Box
      sx={{
        background: "#333333",
        color: "#ffffff",
        p: { xs: 3, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">درباره ما</FooterTitle>
          <Typography variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
          <Box sx ={{
                mt: 4,
                color: '#7A7974' //dove gray
            }}
          >
            <FacebookIcon sx={{mr:1}}/>
            <TwitterIcon sx={{mr:1}}/>
            <InstagramIcon/>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">اطلاعات</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                درباره ما
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
              رهگیری سفارش
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                قوانین
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                شرایط
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">اکانت من</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                ورود
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                حساب من 
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                اکانت من
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" fontFamily={'"Vazirmatn", sans-serif'}>
                علاقه مندی ها
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">خبرنامه</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="ایمیل خود را وارد کنید"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: "#ffffff" }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              دنبال کردن
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
