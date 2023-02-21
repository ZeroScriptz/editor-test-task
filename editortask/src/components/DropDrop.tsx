import React, { useState } from 'react'



const DropDrop = () => {

    const [dragOver, setDragOver] = React.useState(false);
    const [content, setContent] = React.useState<string>("Drop here");
    const handleDragStart = () => setDragOver(true);
    const handleDragEnd = () => setDragOver(false);

    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', e.currentTarget.id)
    }
    const enableDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text');
        console.log(`Dropped Element with id : ${id}`)
        setDragOver(false);
    }
    return (

        <div>
            <div id='d1' draggable="true" onDragStart={dragStart}>Drag</div>
            <div id='d2' draggable="true" onDragStart={dragStart}>Draggg</div>
            <div
                onDragOver={enableDrag}
                onDrop={dropHandler}
                onDragEnter={handleDragStart}
                onDragLeave={handleDragEnd}
                style={dragOver ? { backgroundColor: 'red' } : {}}
            >Drop Here</div>
        </div>
    )
}

export default DropDrop