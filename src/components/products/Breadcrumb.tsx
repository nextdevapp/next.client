import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const {
    query: { slug },
  } = useRouter();
  return (
    <>
      <span className="inline-block text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
        <Link href="/">HOME</Link>
      </span>
      <span className="inline-block text-sm text-body px-1 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
        /
      </span>
      <span className="inline-block text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
        <Link href="/shop">SHOP</Link>
      </span>
      <span className="inline-block text-sm text-body px-1 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
        /
      </span>
      <span className="inline-block text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
        {slug}
      </span>
    </>

    // {/* <span className="inline-block text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">display: inline-block</span> */}
    //   );
  );
};

export default Breadcrumb;
