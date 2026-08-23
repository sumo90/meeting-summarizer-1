import Waveform from "./Waveform";

function LoadingState({ processingStatus }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Waveform bars={5} animate className="h-5" />

        <div>
          <p className="text-sm font-medium text-[#111318]">
            {processingStatus}
          </p>
          <p className="mt-0.5 text-sm text-[#70737C]">
            This may take a few moments...
          </p>
        </div>
      </div>

      <div className="animate-pulse space-y-3">
        <div className="h-3 w-3/4 rounded bg-[#F1F1F0]" />
        <div className="h-3 w-full rounded bg-[#F1F1F0]" />
        <div className="h-3 w-5/6 rounded bg-[#F1F1F0]" />

        <div className="h-3 w-2/3 rounded bg-[#F1F1F0]" />
        <div className="h-3 w-full rounded bg-[#F1F1F0]" />
        <div className="h-3 w-4/5 rounded bg-[#F1F1F0]" />

        <div className="h-3 w-3/4 rounded bg-[#F1F1F0]" />
        <div className="h-3 w-5/6 rounded bg-[#F1F1F0]" />
      </div>
    </div>
  );
}

export default LoadingState;
