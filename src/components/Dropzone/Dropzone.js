import React, {useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import Image from "react-bootstrap/Image";
import fileImage from "../media/fileImage.svg";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "110px 50px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#3688d3",
  borderStyle: "dashed",
  backgroundColor: "#eef2f7",
  color: "#000",
  outline: "none",
  transition: "border .24s ease-in-out",
};


function Dropzone(props) {
  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    files[0] ?

     <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <Image className=" img-fluid rounded d-flex m-auto" src={files[0].preview} />
      </div>

      :

      props.image ?
      
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
          <Image className=" img-fluid rounded d-flex m-auto" src={props.image} />
      </div>
      :

      <section className="container" style={baseStyle}>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
            <div className="innerBox">
                <div className="Image">
                <Image className="d-flex m-auto" src={fileImage} />
                <div className="d-flex justify-content-center m-2">
                  <h5 className="text-center">Imagem do Produto</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      
  );
}

export default Dropzone;