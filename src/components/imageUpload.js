import React, {useState} from 'react'

const Uploadimage = () => {
    const [selectedImage, setSelectedImage] = useState();
    
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
      };

      const removeSelectedImage = () => {
        setSelectedImage();
      };

    return (
        <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
        />

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
            </button>
          </div>
        )}
      </div>
  );
};
export default Uploadimage;

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };