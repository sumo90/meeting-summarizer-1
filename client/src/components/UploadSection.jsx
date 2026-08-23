import Waveform from "./Waveform";

function UploadSection({
  selectedFile,
  loading,
  error,
  onFileChange,
  onUpload,
}) {
  return (
    <section className="mt-12 border-t border-[#E7E7E7] pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[#E7E7E7] bg-white px-5 py-2.5 text-sm font-medium text-[#111318] transition hover:border-[#111318]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          Select file
          <input
            type="file"
            accept="audio/*"
            onChange={onFileChange}
            className="hidden"
          />
        </label>

        <button
          type="button"
          onClick={onUpload}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-md bg-[#111318] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5B5BF0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            <>
              <Waveform bars={4} animate color="#FFFFFF" className="h-3" />
              Processing
            </>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
                <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Upload
            </>
          )}
        </button>

        {selectedFile && (
          <p className="text-sm text-[#70737C]">
            <span className="text-[#111318]">Selected —</span>{" "}
            {selectedFile.name}
          </p>
        )}
      </div>

      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
    </section>
  );
}

export default UploadSection;
