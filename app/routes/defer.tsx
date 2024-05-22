import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const loader = () => {
  return defer({
    critical: "data",
    slowPromise: new Promise((resolve) => setTimeout(() => resolve('Slow promise content'), 1000)),
  });
};

export default function Defer() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Suspense fallback={<p>Loading deffered content</p>}>
        <Await
          resolve={data.slowPromise}
          errorElement={<p>Error loading deffered content!</p>}
        >
          {(content) => (
            <p>
              {content}
            </p>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
