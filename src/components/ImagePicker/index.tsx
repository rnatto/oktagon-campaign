import React, { useCallback, useEffect, useState } from 'react';
import { Add } from '@material-ui/icons';
import { Container } from './styles';
interface Props {
    image: string;
    setImage?: Function;
}
const ImagePicker: React.FC<Props> = ({ image, setImage }) => {
    const [selectedImage, setSelectedImage] = useState('');
    const [imgError, setImgError] = useState(false);
    const handleUpload = () => {
        document.getElementById('upload')?.click();
    }


    const UpdateSelectedImage = useCallback((img: File | string) => {
        if (typeof img === 'string') {
            setSelectedImage(image);
        } else {
            setSelectedImage(URL.createObjectURL(img));
        }
    }, []);

    useEffect(() => {
        UpdateSelectedImage(image);
    }, [image]);
    return (
        <Container onClick={() => handleUpload()}>

            {selectedImage !== '' && !imgError ?
                <img src={selectedImage} onError={() => setImgError(true)} />
                :
                <Add color="disabled" fontSize="large" />}

            <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    if (e && e.target && e.target.files) {
                        UpdateSelectedImage(e.target.files[0]);
                        setImage && setImage(e.target.files[0]);
                        setImgError(false);
                    }
                }}
            />
        </Container>
    )
}

export default ImagePicker;