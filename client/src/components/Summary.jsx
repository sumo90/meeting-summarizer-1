function Summary({ result }) {
  return (
    <div>
      {result ? (
        <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-[#111318]">
          {result.summary}
        </p>
      ) : (
        <p className="text-sm text-[#B3B3B3]">
          Meeting summary will appear here...
        </p>
      )}
    </div>
  );
}

export default Summary;
