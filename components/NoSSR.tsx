import React from "react";
import dynamic from "next/dynamic";

type Props = {
  children: React.ReactNode;
};
const NonSSRWrapper = (props: Props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
