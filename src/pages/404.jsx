import * as React from "react";
import { Link } from "gatsby";
import PageTemplate from "../components/template/page-template";

const NotFoundPage = () => (
  <PageTemplate>
    <h1>Page not found</h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <Link to="/">Go home</Link>.
    </p>
  </PageTemplate>
);

export default NotFoundPage;
