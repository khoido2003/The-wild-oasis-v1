import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // Access the queryClient to invalidate the process so force the data refetch
  const queryClient = useQueryClient();

  // Mutate data with react query
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabins(id),
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabins successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
