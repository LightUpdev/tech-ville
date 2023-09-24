export const cardStyle = {
  container: {
    cursor: "pointer",
    display: "grid",
    padding: "15px 10px",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    gridTemplateColumns: "auto auto auto auto",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "auto auto auto",
    },
  },
};
