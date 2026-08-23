function ActionItems({ result }) {
  return (
    <div>
      {result ? (
        result.action_items.length > 0 ? (
          <div className="divide-y divide-[#E7E7E7]">
            {result.action_items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 py-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B5BF0]" />

                <div>
                  <p className="text-sm font-medium text-[#111318]">
                    {item.task}
                  </p>

                  <div className="mt-1.5 flex gap-4 font-mono text-xs uppercase tracking-wide text-[#70737C]">
                    <span>{item.assignee || "Unassigned"}</span>
                    <span>{item.timestamp || "No timestamp"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#B3B3B3]">No action items found.</p>
        )
      ) : (
        <p className="text-sm text-[#B3B3B3]">
          Action items will appear here...
        </p>
      )}
    </div>
  );
}

export default ActionItems;
