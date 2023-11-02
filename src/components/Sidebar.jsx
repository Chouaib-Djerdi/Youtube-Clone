import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => {
  const selectedCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            color: "#fff",
            background: category.name === selectedCategory && "#FC1503",
          }}
          key={category.name}
        >
          <span
            style={{
              marginRight: "15px",
              color: category.name === selectedCategory ? "#fff" : "#FC1503",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
