import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10 py-6 text-sm">
      {STATS.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#525252] mr-2">·</span>}
          <span className="text-indigo-400 font-semibold">{stat.value}</span>
          <span className="text-[#525252]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
