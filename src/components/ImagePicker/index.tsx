import { Box } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Add } from '@material-ui/icons';
import { Container } from './styles';
interface Props {
    image: string;
}
const ImagePicker: React.FC<Props> = ({ image }) => {
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File>({} as File);
    const handleUpload = () => {
        document.getElementById('upload')?.click();
    }


  const UpdateSelectedImage = useCallback((img: File | string) => {
    if (typeof img === 'string') {
        setSelectedImage(img);
    } else {
        setSelectedImage(URL.createObjectURL(img));
    }
  }, []);

    useEffect(() => {
        // if (image) {
        //     setSelectedImage(image);
        // }

    }, [image]);
    return (
        <Container onClick={() => handleUpload()}>

            {selectedImage !== '' ?
                <img src={selectedImage} alt="img" />
                :
                <Add color="disabled" fontSize="large" />}

            <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    if (e && e.target && e.target.files) {
                        UpdateSelectedImage(e.target.files[0]);
                        setSelectedFile(e.target.files[0]);
                    }
                }}
            />
        </Container>
    )
}

export default ImagePicker;