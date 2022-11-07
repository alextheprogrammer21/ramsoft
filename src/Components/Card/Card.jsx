import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CARD_DATA from "../../Data/cardData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Card({
  cardListId,
  cardId,
  name,
  description,
  deadline,
}) {
  const [value, setValue] = React.useState(name);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const cards = CARD_DATA[cardListId - 1].cards;
    const cardObj = cards[cardId.split("-")[1] - 1];
    cardObj.name = event.target.value;
    window.localStorage.setItem("Cards", JSON.stringify(CARD_DATA));
    setValue(event.target.value);
  };

  const changeDetails = () => {
    alert("todo");
  };
  return (
    <>
      <Box
        data-testid="card"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Task"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            onClick={value.length > 0 ? handleOpen : null}
          />
        </div>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={changeDetails}
          >
            {value}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {deadline}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
