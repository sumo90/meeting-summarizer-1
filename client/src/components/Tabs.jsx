function Tabs({ activeTab, setActiveTab, loading }) {
  const tabs = ["transcript", "summary", "actions"];

  return (
    <div className="flex gap-8 border-b border-[#E7E7E7]">
      {tabs.map((tab) => {
        const disabled = loading && tab !== "transcript";
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            disabled={disabled}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px border-b-2 pb-3 font-mono text-xs font-medium uppercase tracking-[0.15em] transition ${
              isActive
                ? "border-[#111318] text-[#111318]"
                : disabled
                  ? "border-transparent text-[#D4D4D4]"
                  : "cursor-pointer border-transparent text-[#B3B3B3] hover:text-[#111318]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
