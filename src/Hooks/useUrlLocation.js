import { useSearchParams } from "react-router-dom";

export function useUrlLocation() {
  const [searchParams, setSearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");
  return [lat, lng];
}
