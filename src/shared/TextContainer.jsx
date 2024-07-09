function TextContainer({ imgSrc, alt, h3, p, isChooseBox = false }) {
  if (isChooseBox) {
    return (
      <>
        <img src={imgSrc} alt={alt} className="max-w-[14rem]" />
        <div className="space-y-3">
          <h3 className="section-sub-title text-3xl font-bold">{h3}</h3>
          <p className="">{p}</p>
        </div>
      </>
    );
  }
  return (
    <>
      <img src={imgSrc} alt={alt} className="max-w-[14rem]" />
      <h3 className="section-sub-title text-3xl font-bold">{h3}</h3>
      <p className="">{p}</p>
    </>
  );
}
export default TextContainer;
