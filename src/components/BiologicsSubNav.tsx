import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Props {
  // optional override for which subtab should appear active
  activeSub?: "biodrug" | "bioasthma" | null;
}

const BiologicsSubNav: React.FC<Props> = ({ activeSub: forcedActive }) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search || "");

  const forced =
    forcedActive || (params.get("active") === "/biologics" ? null : null);

  const active =
    forced ||
    (pathname.includes("biodrugstakeholder")
      ? "biodrug"
      : pathname.includes("bioasthematype")
      ? "bioasthma"
      : null);

  return (
    <div className="container mx-auto px-4 py-3 flex justify-end gap-3">
      <Button
        variant={active === "biodrug" ? undefined : "ghost"}
        className={active === "biodrug" ? "bg-primary text-white" : undefined}
        onClick={() => navigate("/biodrugstakeholder?active=/biologics")}
      >
        Drug Vs Stakeholder
      </Button>

      <Button
        variant={active === "bioasthma" ? undefined : "ghost"}
        className={active === "bioasthma" ? "bg-primary text-white" : undefined}
        onClick={() => navigate("/bioasthematype?active=/biologics")}
      >
        Asthama Type
      </Button>
    </div>
  );
};

export default BiologicsSubNav;
