import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import { BrowserBarcodeReader } from "@zxing/library";

const QRCodeReader = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.getText());
      console.log("QR код распознан:", result.getText());
    }
  };

  const handleError = (error) => {
    console.error("Ошибка при сканировании:", error);
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScanResult(null);
        const image = new Image();
        image.onload = async () => {
          const codeReader = new BrowserBarcodeReader();
          try {
            const result = await codeReader.decodeFromImage(image);
            setScanResult(result.text);
            console.log("QR код распознан:", result.text);
          } catch (error) {
            console.error("Ошибка при распознавании QR кода:", error);
            setScanResult("Изображение не содержит QR кода");
          }
        };
        image.src = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      {scanResult && <p>Результат сканирования: {scanResult}</p>}
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QRCodeReader;
