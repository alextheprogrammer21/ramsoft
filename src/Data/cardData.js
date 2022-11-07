const CARD_DATA = JSON.parse(window.localStorage.getItem("Cards")) || [
  {
    id: "1",
    title: "Todo",
    cards: [
      {
        id: "1-1",
        name: "fix button",
        description: "Fill out mock card data",
        deadline: "12/12/2022",
      },
      {
        id: "1-2",
        name: "fix sadghois",
        description: "many user stories",
        deadline: "12/12/2022",
      },
    ],
  },
  {
    id: "2",
    title: "In Progress",
    cards: [
      {
        id: "2-1",
        name: "fix data",
        description: "create stuff",
        deadline: "01/01/2023",
      },
      {
        id: "2-2",
        name: "create button",
        description: "Delete route",
        deadline: "12/13/2022",
      },
    ],
  },
  {
    id: "3",
    title: "In Review",
    cards: [
      {
        id: "3-1",
        name: "back button",
        description: "Review back button erasing data bug",
        deadline: "12/15/2022",
      },
    ],
  },
  {
    id: "4",
    title: "Done",
    cards: [
      {
        id: "1-1",
        name: "funding",
        description: "open company",
        deadline: "12/11/2022",
      },
    ],
  },
];

export default CARD_DATA;
