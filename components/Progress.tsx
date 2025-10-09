import { cn } from "@/lib/utils";

type ProgressProps = {
  value: number;
  className?: string;
};

export function Progress({ value, className }: ProgressProps) {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-3 overflow-hidden", className)}>
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
