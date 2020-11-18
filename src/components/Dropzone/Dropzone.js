import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

import Image from 'react-bootstrap/Image';
import fileImage from '../media/fileImage.svg'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#3688d3',
  borderStyle: 'dashed',
  backgroundColor: '#eef2f7',
  color: '#000',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function Dropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
   <div className="container p-3">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div className="innerBox">
            <Image className="d-flex m-auto" src={fileImage} />
            <div className="d-flex justify-content-center m-2">
                <h5 className="text-center">Imagem do Produto</h5>
            </div>
        </div>
      </div>
    </div>
  );
}


export default Dropzone;