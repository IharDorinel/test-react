import ContentItem from "../ContentItem";
import "./index.css";


const ContentList = ({ content, visible }) => {
  
  const ContentItems = content.length === 0 ? null : <ContentItem content={content} visible={visible}/>
  
  return (
    <ul className="Content">
      {ContentItems}
    </ul>
  );
};

export default ContentList;