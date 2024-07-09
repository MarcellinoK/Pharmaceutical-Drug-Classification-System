import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Prediction = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [hasil, setHasil] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (typeof onFileChange === 'function') {
      onFileChange(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const apiUrl = 'https://0a7f-35-243-154-155.ngrok-free.app/predict';

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setStatus('<div style="text-align:center;">File berhasil diproses!</div>');

        // Scroll to prediction section after successful upload
        const predictionSection = document.getElementById('prediction');
        predictionSection.scrollIntoView({ behavior: 'smooth' });

      } else {
        setStatus('<div style="text-align:center;">File gagal diproses!</div>');
      }

      setConfidence(json.confidence);
      switch (json.label) {
        case 0:
          setHasil('Alaxan');
          break;
        case 1:
          setHasil('Bactidol');
          break;
        case 2:
          setHasil('Bioflu');
          break;
        case 3:
          setHasil('Biogesic');
          break;
        case 4:
          setHasil('DayZinc');
          break;
        case 5:
          setHasil('Decolgen');
          break;
        case 6:
          setHasil('Fish Oil');
          break;
        case 7:
          setHasil('Kremil S');
          break;
        case 8:
          setHasil('Medicol');
          break;
        case 9:
          setHasil('Neozep');
          break;
        default:
          setHasil('Tidak Terdeteksi');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('<div style="text-align:center;">File gagal diproses!</div>');
    }
  };

  return (
    <div id="prediction" className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-center text-[#555454] mb-8">
          Upload <span className="text-[#775be8]">File</span>
        </h1>
        <p className="text-center text-xl text-gray-600 mb-8">
        To make a prediction, please upload a file first. Please choose the file you want to predict.
        </p>
        <div className="flex justify-center mb-8">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-gray-100 text-blue-600 rounded-lg shadow-md tracking-wide uppercase border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
            <span className="mt-2 text-lg leading-normal">Choose File</span>
            <input
              id="file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
        {selectedFile && (
          <div className="mt-4 w-full flex flex-col items-center">
            <div className="overflow-hidden rounded-lg border border-gray-300 shadow-lg w-48">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg mt-2 text-center text-gray-700">File yang dipilih: {selectedFile.name}</p>
            <button
              className="bg-[#1e93ed] hover:bg-[#48a4ef] text-white font-bold py-2 px-8 rounded mt-4 text-lg"
              onClick={handleUpload}
            >
              Upload and Predict
            </button>
          </div>
        )}
        {status && (
          <div className="mt-8 text-center">
            <p dangerouslySetInnerHTML={{ __html: status }} className="text-lg text-green-600" />
            <p className="text-xl mt-4">Hasil: <span className="font-semibold text-gray-800">{hasil}</span></p>
            <p className="text-xl mt-4">Confidence: <span className="font-semibold text-gray-800">{confidence}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prediction;
