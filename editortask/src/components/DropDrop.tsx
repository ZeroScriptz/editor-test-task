import React, { useState } from 'react';
import './upload.css';

const DropDrop = () => {
  // The content of the target box
  const [droppedContent, setDroppedContent] = useState<(string | File)[]>([]);

  // The data being dragged
  const [dragData, setDragData] = useState<string>('');

  // The uploaded file
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // This function will be triggered when you start dragging
  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, data: string) => {
    event.dataTransfer.setData('text', data);
    setDragData(data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    if (uploadedFile) {
      setDroppedContent([...droppedContent, uploadedFile]);
      setUploadedFile(null);
    } else {
      setDroppedContent([...droppedContent, data]);
    }
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // This function is called when the user selects a file to upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
      console.log(files[0]);
      console.log("Uploaded file: " + files[0].name);
    }
  };

  return (
    <div className="container">
        <section className="workzone">
            <h1>Sidebar</h1>
      <div
        className="imgContainer"
        onDragStart={(event) => dragStartHandler(event, dragData)}
        draggable={true}
      >
        <input placeholder='Choose file' type="file" onChange={handleFileUpload} />
      </div>

      <div
        className="box2"
        onDragStart={(event) => dragStartHandler(event, dragData)}
        draggable={true}
      >
        <h2>
          <input placeholder='Type Here' onChange={(e) => setDragData(e.target.value)} />
        </h2>
      </div>
        </section>
        
      <div className="box3" onDragOver={allowDrop} onDrop={dropHandler}>
      <h1>Work Area - Drag Here</h1>
        {droppedContent.map((content, index) => (
          <React.Fragment key={index}>
            {content instanceof File ? (
              <img src={URL.createObjectURL(content)} alt={content.name} />
            ) : (
              <p>{content}</p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DropDrop;
