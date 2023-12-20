import { BACKEND_URL } from "@/utils/constants";
import { BASE_DOMAIN } from "@/projectSettings/website";

export async function getRestrictions() {
  const options = {
    method: "GET",
    headers: { origin: BASE_DOMAIN },
    mode: "no-cors"
  };

  const res = await fetch(`${BACKEND_URL}/myaccount/ip/restrictions/`, options);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();

  return data.data;
}
