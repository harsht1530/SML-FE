import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Props {
  // optional override for which subtab should appear active
  activeSub?: "drug" | "asthma" | null;
}

const PatientSubNav: React.FC<Props> = ({ activeSub: forcedActive }) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search || "");

  const forced =
    forcedActive || (params.get("active") === "/patient-journey" ? null : null);

  // derive active state from pathname if not forced
  const active =
    forced ||
    (pathname.includes("drugstakeholder")
      ? "drug"
      : pathname.includes("asthematype")
      ? "asthma"
      : null);

  return (
    <div className="container mx-auto px-4 py-3 flex justify-end gap-3">
      <Button
        variant={active === "drug" ? undefined : "ghost"}
        className={active === "drug" ? "bg-primary text-white" : undefined}
        onClick={() => navigate("/drugstakeholder?active=/patient-journey")}
      >
        Drug Vs Stakeholder
      </Button>

      <Button
        variant={active === "asthma" ? undefined : "ghost"}
        className={active === "asthma" ? "bg-primary text-white" : undefined}
        onClick={() => navigate("/asthematype?active=/patient-journey")}
      >
        Asthama Type
      </Button>
    </div>
  );
};

export default PatientSubNav;
