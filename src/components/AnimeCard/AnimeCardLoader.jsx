import React from "react";
import ContentLoader from "react-content-loader";

const Loader = props => (
  <ContentLoader
    speed={2}
    width={221}
    height={395}
    viewBox="0 0 221 395"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="10" y="33" rx="16" ry="16" width="205" height="300" />
    <rect x="10" y="357" rx="0" ry="0" width="205" height="23" />
  </ContentLoader>
);

export default Loader;
