export default function SimpleButton({ text, onClickHandler }) {
  return (
    <>
      <button className="btn btn-primary" onClick={onClickHandler}>
        {text}
      </button>
    </>
  );
}
