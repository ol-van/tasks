// @ts-ignore
import { useMutation } from "@tanstack/react-query"
// @ts-ignore
import { useSnackbar } from "notistack"
import { checkUsers } from "./index.ts"

export function useCheckUsers() {
  const {enqueueSnackbar} = useSnackbar()

  return useMutation<{ result: boolean }, unknown, string[]>({
    mutationFn: (req: string[]) => checkUsers(req),
    onError: () => {
      enqueueSnackbar('check users is failed')
    },
  })
}
