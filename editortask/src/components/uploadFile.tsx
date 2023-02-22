import React, { Component, ChangeEvent } from 'react';
import DropDrop from './DropDrop';

class Upload extends Component<{ onImageChange: (file: File) => void }> {
    state = {
      file: null
    };
  
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0];
        this.setState({
          file: URL.createObjectURL(file)
        });
        this.props.onImageChange(file);
      }
    };
  
    render() {
      return (
        <div>
          <input type="file"  onChange={this.handleChange} />
          {this.state.file && <img src={this.state.file} alt="uploaded file" />}
        </div>
      );
    }
  }
  

export default Upload;
