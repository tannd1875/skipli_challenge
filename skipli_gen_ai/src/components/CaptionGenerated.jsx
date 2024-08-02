import Caption from "./Caption";

const CaptionGenerated = ({ List, topic }) => {
  return (
    <div className="caption">
      <h1>Caption generated for you</h1>
      {List.map((caption, index) => (
        <Caption
          key={index}
          caption={caption.slice(4).slice(0, -2)}
          status={"Save"}
          topic={topic}
        ></Caption>
      ))}
    </div>
  );
};

export default CaptionGenerated;
