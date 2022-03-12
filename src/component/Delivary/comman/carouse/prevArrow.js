const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    </div>
  );
};
export default PrevArrow;
