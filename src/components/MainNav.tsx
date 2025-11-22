import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React from "react";

// Simple main navigation used in headers. Highlights the active route.
const MainNav: React.FC = () => {
  const { pathname, search } = useLocation();

  // Allow pages to force which nav item appears active by passing
  // an `active` query parameter (e.g. `?active=/patient-journey`).
  // This helps when a page shows another internal view but wants the
  // main nav to remain highlighting a specific section.
  const params = new URLSearchParams(search || "");
  const forcedActive = params.get("active");
  const activePath = forcedActive || pathname;

  const isActive = (p: string) => {
    return activePath === p;
  };

  const activeClass = "bg-primary text-white";

  return (
    <div
      className="flex items-center gap-3"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/">
        <Button
          variant={isActive("/") ? undefined : "ghost"}
          className={isActive("/") ? activeClass : undefined}
          aria-current={isActive("/") ? "page" : undefined}
        >
          Home
        </Button>
      </Link>

      <Link to="/drug-mentions">
        <Button
          variant={isActive("/drug-mentions") ? undefined : "ghost"}
          className={isActive("/drug-mentions") ? activeClass : undefined}
          aria-current={isActive("/drug-mentions") ? "page" : undefined}
        >
          Drug Mentions
        </Button>
      </Link>

      <Link to="/biologics">
        <Button
          variant={isActive("/biologics") ? undefined : "ghost"}
          className={isActive("/biologics") ? activeClass : undefined}
          aria-current={isActive("/biologics") ? "page" : undefined}
        >
          Biologics
        </Button>
      </Link>

      <Link to="/patient-journey">
        <Button
          variant={isActive("/patient-journey") ? undefined : "ghost"}
          className={isActive("/patient-journey") ? activeClass : undefined}
          aria-current={isActive("/patient-journey") ? "page" : undefined}
        >
          Patient Journey
        </Button>
      </Link>
    </div>
  );
};

export default MainNav;
