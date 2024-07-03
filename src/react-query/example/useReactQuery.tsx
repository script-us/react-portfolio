import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { testPostApi, testApi } from '.'
import { Post } from './interface'

const useReactQuery = () => {
  const {
    isLoading: testLoading,
    isError: isTestError,
    data: testData,
  } = useQuery({ queryKey: ['test'], queryFn: testApi, refetchOnWindowFocus: false })

  const useAddPost = () => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async (data: Post) => await testPostApi(data),
      onSettled: (_, error) => {
        if (error) {
          console.log('error')
        } else {
          queryClient.invalidateQueries({ queryKey: ['test'] })
        }
      },
    })
  }
  return { testLoading, testData, useAddPost }
}

export default useReactQuery
