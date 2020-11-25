import React from 'react';
import {useDropzone} from 'react-dropzone';
import Image from "react-bootstrap/Image";
import fileImage from "../media/fileImage.svg";
import "./Dropzone.css";

export default function Dropzone(props) {

  const onDrop = props.onDrop;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });


  return (
    props.image ?

    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Image className="img-fluid" src={props.image} />
    </div>

    :

    <div {...getRootProps()} className={`dropZone ${isDragActive ? 'active-drop' : null}`}>
      <input {...getInputProps()} />
      <div className="mx-3">
        <Image className="w-100 px-5" src={fileImage} />
        <h4 className="text-center">Imagem do Produto</h4>
      </div>
    </div>
  );
}