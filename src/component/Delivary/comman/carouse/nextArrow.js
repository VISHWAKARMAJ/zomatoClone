const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    </div>
  );
};
export default NextArrow;
