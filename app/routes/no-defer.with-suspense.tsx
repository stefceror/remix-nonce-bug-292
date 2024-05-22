import { json } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const loader = () => {
  return json({
    critical: "data",
    slowPromise: new Promise((resolve) => setTimeout(() => resolve('Slow promise content'), 1000)),
  });
};

export default function NoDeferWithSuspense() {
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
              Obviously we can't render the non-deferred promise
            </p>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
