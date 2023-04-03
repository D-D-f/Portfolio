const Round = ({ color }) => {
  const styleRound = {
    display: "block",
    backgroundColor: `${color}`,
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    margin: "0.2em 0.3em",
  };
  return <span style={{ ...styleRound }}></span>;
};

export default Round;
