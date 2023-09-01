import * as React from "react";
import { Link } from "gatsby";

export default function CustomPage({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <p>This is a custom page.</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  );
}
