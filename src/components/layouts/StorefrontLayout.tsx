import React from "react";
import StorefrontFooter from "./StorefrontFooter";
import StorefrontHeader from "./StorefrontHeader";
import type { LayoutProps } from "../../types/PageWithLayoutType";
import StorefrontPomotion from "./StorefrontPomotion";

interface Props {
  children: React.ReactNode;
}

const StorefrontLayout: LayoutProps = (props: Props) => {
  return (
    <>
      <div className=" flex flex-col">
        <nav className=" sticky top-0 z-50">
          <StorefrontHeader />
          <StorefrontPomotion />
        </nav>
        <main className="relative flex items-center flex-grow">
          <div
            className="relative container mx-auto mt-1 flex-grow "
            style={{
              minHeight: "-webkit-fill-available",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {props.children}
          </div>
        </main>
        <StorefrontFooter />
      </div>
    </>
  );
};

export default StorefrontLayout;
