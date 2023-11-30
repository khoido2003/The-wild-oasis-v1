import { useQuery } from "@tanstack/react-query";

import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoaading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoaading, error, settings };
}
