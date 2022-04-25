import React from 'react'
import type { LayoutProps } from "../../types/PageWithLayoutType";

interface Props {
    children: React.ReactNode;
  }
  

const DashboardLayout: LayoutProps = (props: Props) => {
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout