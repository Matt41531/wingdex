import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useLocation } from "react-router";
import { useEffect, useState, Fragment } from "react";
import HeaderSearchBar from "./HeaderSearchBar";
function Header() {
  const path = useLocation().pathname;
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  useEffect(() => {
    setBreadcrumbs(path.split("/").filter((breadcrumb) => breadcrumb !== ""));
  }, [path]);

  return (
    <header className="flex items-center justify-between w-full h-16 bg-sidebar p-4">
      <div className="flex items-center justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((breadcrumb) => {
              return (
                <Fragment key={breadcrumb}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={"/" + breadcrumb}>
                      {breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1)}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-1 items-center justify-center max-w-1/2">
        <HeaderSearchBar />
      </div>
    </header>
  );
}

export default Header;
