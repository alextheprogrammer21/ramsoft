import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import CARD_DATA from "../../Data/cardData.js";
import Card from "../Card/Card.jsx";

import "./CardList.scss";

export default function CardList({ cardListId, title, cards }) {
  const [refresh, setRefresh] = React.useState(false);
  const handleAddCard = function () {
    const idArray = cards[cards.length - 1].id.split("-");
    const newId = idArray[0] + "-" + (Number(idArray[1]) + 1).toString();
    cards.push({
      id: newId,
      name: "",
      description: "",
      deadline: "",
    });
    window.localStorage.setItem("Cards", JSON.stringify(CARD_DATA));
    setRefresh(!refresh);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <li key={`section-1`}>
          <ul>
            <ListSubheader>{title}</ListSubheader>
            {cards.map((card) => {
              const { id, name, description, deadline } = card;
              return (
                <ListItem key={id}>
                  <ListItemText
                    primary={
                      <Card
                        cardListId={cardListId}
                        cardId={id}
                        name={name}
                        description={description}
                        deadline={deadline}
                      />
                    }
                  />
                </ListItem>
              );
            })}
          </ul>
        </li>
        <Button variant="text" onClick={handleAddCard}>
          Add a card
        </Button>
      </List>
    </>
  );
}
