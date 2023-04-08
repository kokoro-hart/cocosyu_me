---
to: <%= path %>/<%= component_name %>.tsx
---
import { FC } from "react";
<% if (have_style) { -%>

import styles from "./<%= component_name -%>.module.css"
<% } -%>
<% if (have_props) { -%>

type <%= component_name -%>Props = {};
<% } -%>

export const <%= component_name -%>: <%- type_annotate %> = <%= props %> => {
  return (
<% if (have_style) { -%>
    <div className={styles.container} {...props}>
<% } else { -%>
    <div>
<% } -%>
    </div>
  );
}