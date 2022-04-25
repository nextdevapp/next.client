import { NextPage } from "next";
import type { ReactElement } from "react";
import StorefrontLayout from "../components/layouts/StorefrontLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

export type PageWithStorefrontLayout = NextPage & {
  layout: typeof StorefrontLayout;
};

export type PageWithDashboardLayout = NextPage & {
  layout: typeof DashboardLayout;
};

export type PageWithLayoutType =
  | PageWithStorefrontLayout
  | PageWithDashboardLayout;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
