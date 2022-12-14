import { Box, Slide } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
  "20درصد تخفیف شب عید ",
  "جشنواره فروش عید تا عید ",
];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer>
      <Slide direction={show ? "left" : "right"} in={show}
        timeout={{
          enter:500,
          exit:150
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
