"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface RatingScaleProps {
  label: string;
  value: number;
  maxValue?: number;
}

export function RatingScale({ label, value, maxValue = 10 }: RatingScaleProps) {
  const { t } = useLanguage();
  const percentage = (value / maxValue) * 100;

  // Get translated label
  const getTranslatedLabel = (label: string) => {
    const labelMap: Record<string, keyof typeof t.common> = {
      "Seriousness": "seriousness",
      "Writing Style": "writingStyle",
      "Emotional Depth": "emotionalDepth",
      "Originality": "originality",
      "Overall": "overall",
    };
    const key = labelMap[label];
    return key ? t.common[key] : label;
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{getTranslatedLabel(label)}</span>
        <span className="text-sm font-medium text-foreground">{value}/{maxValue}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            "bg-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
