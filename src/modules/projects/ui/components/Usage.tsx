import { Button } from "@/components/ui/button";
import { formatDuration, intervalToDuration } from "date-fns";
import { CrownIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  points: number;
  expiresAt: Date; // always a timestamp (ms)
}

const Usage = ({ points, expiresAt }: Props) => {
  const resetDate = new Date(expiresAt);

  return (
    <div className="rounded-t-xl bg-background border border-b-0 p-2.5">
      <div className="flex items-center gap-x-2">
        <div>
          <p className="text-sm">{points} free credits remaining</p>
          <p className="text-sm text-muted-foreground">
            Resets in{" "}
            {formatDuration(
              intervalToDuration({
                start: new Date(),
                end: resetDate,
              }),
              { format: ["months", "days", "hours"] }
            )}
          </p>
        </div>
        <Button asChild size="sm" className="ml-auto">
          <Link href="/pricing">
            <CrownIcon /> Upgrade
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Usage;
