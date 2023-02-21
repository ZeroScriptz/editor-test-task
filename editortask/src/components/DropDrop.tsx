import React, { useState } from 'react'

const PHOTO_URL = "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg";

const DropDrop = () => {
    // The content of the target box
    const [content, setContent] = useState<string>("Drop Something Here");
  
    // The data being dragged
    const [dragData, setDragData] = useState<string>("");
  
    // This function will be triggered when you start dragging
    const dragStartHandler = (
      event: React.DragEvent<HTMLDivElement>,
      data: string
    ) => {
      event.dataTransfer.setData("text", data);
      setDragData(data);
    };
  
    // This function will be triggered when dropping
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("text");
      setContent(data);
    };
  
    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };
  
    return (
      <div className="container">
        <div
          className="box1"
          onDragStart={(event) => dragStartHandler(event, PHOTO_URL)}
          draggable={true}
        >
          <img src={PHOTO_URL} alt="Cute Dog" />
        </div>
  
        <div
          className="box2"
          onDragStart={(event) => dragStartHandler(event, dragData)}
          draggable={true}
        >
          <h2><input onChange={(e) => setDragData(e.target.value)}/></h2>
        </div>
  
        <div className="box3" onDragOver={allowDrop} onDrop={dropHandler}>
          {content.endsWith(".jpeg") ? <img src={content} /> : <h2>{content}</h2>}
        </div>
      </div>
    );
  };

export default DropDrop
