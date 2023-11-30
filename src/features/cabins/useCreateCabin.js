import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateCabin() {
  // USE React query to mutate data: Insert new cabin
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      // The reset() function come from the useForm hook so we can not access it here but luckily we can pass the reset right into the mutate which is happended inside CreateCabinForm

      // reset(); // clear data in the form
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
