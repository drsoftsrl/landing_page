import Link from "next/link";
import { DASHBOARD_URL } from "@/utils/constants";

export default function ButtonMain({
  children,
  text,
  extraClass = "",
  href = DASHBOARD_URL,
  buttonClass = "btn-primary"
}) {
  return (
    <Link href={href} className={`btn ${buttonClass} ${extraClass}`}>
      {text}
      {children}
    </Link>
  );
}
