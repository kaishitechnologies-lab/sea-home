export const provinces = [
  {
    id: "western",
    name: "Western Province",
    towns: "Colombo, Negombo, Mount Lavinia",
    homes: 127,
    icon: "pin",
  },
  {
    id: "southern",
    name: "Southern Province",
    towns: "Galle, Weligama, Mirissa, Tangalle",
    homes: 87,
    icon: "waves",
  },
  {
    id: "central",
    name: "Central Province",
    towns: "Kandy, Nuwara Eliya, Hatton",
    homes: 47,
    icon: "mountain",
  },
  {
    id: "eastern",
    name: "Eastern Province",
    towns: "Arugam Bay, Trincomalee, Pasikudah",
    homes: 31,
    icon: "sun",
  },
];

// x / y are percentages inside the map box
export const pins = [
  { id: "negombo", label: "Negombo (25)", x: 27, y: 33, type: "coastal", province: "western" },
  { id: "kandy", label: "Kandy (28)", x: 55, y: 37, type: "highland", province: "central" },
  { id: "colombo", label: "Colombo (68)", x: 30, y: 44, type: "metro", province: "western" },
  { id: "galle", label: "Galle (48)", x: 31, y: 83, type: "coastal", province: "southern" },
  { id: "weligama", label: "Weligama (39)", x: 41, y: 87, type: "coastal", province: "southern" },
];