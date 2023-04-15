import useSWR from "swr";


export const handleToggles = (e, vlad) => {

  if ( e.target.classList[0] === "hamburger" ) {
    vlad(prev => !prev);
  } else{
    vlad(false)
  }
}

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useFetcher (id) {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);
 
  return {
    user: data,
    isLoading,
    isError: error
  }
}