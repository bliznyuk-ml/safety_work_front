import Rect, { useState, useEffect } from "react";

const QRCodeComponent = () => {
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:8189/demo/getqrcode/15")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Issue loading QR-code");
        }
        return response.blob();
      })
      .then((blob) => {
        const qrCodeUrl = URL.createObjectURL(blob);
        setQRCodeUrl(qrCodeUrl);
      })
      .catch((error) => {
        console.error("Issue og getting QR-code: ", error);
      });
  }, []);

  return <div>{qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}</div>;
};

export default QRCodeComponent;
