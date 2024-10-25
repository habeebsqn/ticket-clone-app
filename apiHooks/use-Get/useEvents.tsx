import { useQuery } from "@tanstack/react-query";
import { getUserEvents } from "@/config/api";
const useEvents = () => {
  return useQuery({
    queryKey: ["useEvents"],
    queryFn: getUserEvents,
  });
};

export default useEvents;
