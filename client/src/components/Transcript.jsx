import LoadingState from "./LoadingState";

function Transcript({ loading, processingStatus, result }) {
  return (
    <div>
      {loading ? (
        <LoadingState processingStatus={processingStatus} />
      ) : result ? (
        <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-[#111318]">
          {result.transcript}
        </p>
      ) : (
        <p className="text-sm text-[#B3B3B3]">Transcript will appear here...</p>
      )}
    </div>
  );
}

export default Transcript;
