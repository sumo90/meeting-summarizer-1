import { useState } from "react";
import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("transcript");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [processingStatus, setProcessingStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an audio file first.");
      return;
    }

    setActiveTab("transcript");
    setLoading(true);
    setProcessingStatus("Processing meeting...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("audio", selectedFile);

      const response = await fetch("http://localhost:5000/api/meetings", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process meeting.");
      }

      setResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setProcessingStatus("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-16 md:px-0">
        <Header />

        <UploadSection
          selectedFile={selectedFile}
          loading={loading}
          error={error}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
        />

        <ResultsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          loading={loading}
          processingStatus={processingStatus}
          result={result}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
