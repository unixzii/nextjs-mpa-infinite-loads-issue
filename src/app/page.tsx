"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const timerRef = useRef<number | undefined>(undefined);
  const [state, update] = useState(0);
  useEffect(() => {
    return () => {
      const timerId = timerRef.current;
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerRef]);
  const spinner = "-/|\\";

  return (
    <main>
      <p>{spinner[state % spinner.length]}</p>
      <p>
        <Link href="https://google.com">External Link</Link>
      </p>
      <div>
        <button
          disabled={state > 0}
          onClick={() => {
            timerRef.current = setInterval(() => {
              update((prev) => prev + 1);
            }, 50) as unknown as number;
          }}
        >
          Start Spinning
        </button>
      </div>
    </main>
  );
}
