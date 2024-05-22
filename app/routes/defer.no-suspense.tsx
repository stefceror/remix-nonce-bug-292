import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const loader = () => {
  return defer({
    critical: "data",
    slowPromise: new Promise((resolve) => setTimeout(() => resolve('Slow promise content'), 1000)),
  });
};

export default function DeferNoSuspense() {
  const {critical} = useLoaderData<typeof loader>();

  return (
    <div>
      {critical}
    </div>
  );
}
