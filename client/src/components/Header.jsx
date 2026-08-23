import Waveform from "./Waveform";

function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Waveform bars={6} />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#70737C]">
          AI Meeting Notes
        </span>
      </div>

      <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-[#111318] md:text-5xl">
        Turn your Meetings into a{" "}
        <span className="text-[#5B5BF0]">clear record</span>.
      </h1>

      <p className="max-w-md text-[15px] leading-relaxed text-[#70737C]">
        Upload a meeting recording and get a transcript, summary, and action items in
        minutes.
      </p>
    </header>
  );
}

export default Header;
