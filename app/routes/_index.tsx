import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
      <li><Link to="/defer/with-suspense">Defer in loader and Suspense in component</Link></li>
      <li><Link to="/defer/no-suspense">Defer in loader without Suspense in component</Link></li>
      <li><Link to="/no-defer/with-suspense">Json in loader with Suspense in component</Link></li>
      </ul>
    </div>
  );
}
