/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  DojoApiResponseCoinBySolvedPick,
  DojoApiResponseCoinUseDetailId,
  DojoApiResponseCurrentCoinResponse,
  ProvideCoinByEventParams
} from '.././model'
import { customInstance } from '../../apis/custom-client';
import type { ErrorType } from '../../apis/custom-client';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 특정 사용자에게 잼을 제공하는 API (관리자 전용)
 * @summary 관리자가 직접 특정 사용자에게 잼을 제공하는 API
 */
export const provideCoinByEvent = (
    params: ProvideCoinByEventParams,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<DojoApiResponseCoinUseDetailId>(
      {url: `https://docker-ecs.net/coin/admin/update`, method: 'POST',
        params
    },
      options);
    }
  


export const getProvideCoinByEventMutationOptions = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof provideCoinByEvent>>, TError,{params: ProvideCoinByEventParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof provideCoinByEvent>>, TError,{params: ProvideCoinByEventParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof provideCoinByEvent>>, {params: ProvideCoinByEventParams}> = (props) => {
          const {params} = props ?? {};

          return  provideCoinByEvent(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProvideCoinByEventMutationResult = NonNullable<Awaited<ReturnType<typeof provideCoinByEvent>>>
    
    export type ProvideCoinByEventMutationError = ErrorType<unknown>

    /**
 * @summary 관리자가 직접 특정 사용자에게 잼을 제공하는 API
 */
export const useProvideCoinByEvent = <TError = ErrorType<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof provideCoinByEvent>>, TError,{params: ProvideCoinByEventParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof provideCoinByEvent>>,
        TError,
        {params: ProvideCoinByEventParams},
        TContext
      > => {

      const mutationOptions = getProvideCoinByEventMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 유저의 현재 남은 코인 정보를 조회합니다
 * @summary 본인의 현재 코인을 조회합니다.
 */
export const getCurrentCoin = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseCurrentCoinResponse>(
      {url: `https://docker-ecs.net/coin`, method: 'GET', signal
    },
      options);
    }
  

export const getGetCurrentCoinQueryKey = () => {
    return [`https://docker-ecs.net/coin`] as const;
    }

    
export const getGetCurrentCoinQueryOptions = <TData = Awaited<ReturnType<typeof getCurrentCoin>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrentCoin>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCurrentCoinQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCurrentCoin>>> = ({ signal }) => getCurrentCoin(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCurrentCoin>>, TError, TData> & { queryKey: QueryKey }
}

export type GetCurrentCoinQueryResult = NonNullable<Awaited<ReturnType<typeof getCurrentCoin>>>
export type GetCurrentCoinQueryError = ErrorType<unknown>

/**
 * @summary 본인의 현재 코인을 조회합니다.
 */
export const useGetCurrentCoin = <TData = Awaited<ReturnType<typeof getCurrentCoin>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrentCoin>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetCurrentCoinQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 현재 운영중인 QuestionSheet에서 지급된 코인 반환 API
 * @summary 현재 운영중인 QuestionSheet에서 지급된 코인을 반환합니다.
 */
export const getCoinBySolvedPick = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<DojoApiResponseCoinBySolvedPick>(
      {url: `https://docker-ecs.net/coin/current/question-set/solved-picks`, method: 'GET', signal
    },
      options);
    }
  

export const getGetCoinBySolvedPickQueryKey = () => {
    return [`https://docker-ecs.net/coin/current/question-set/solved-picks`] as const;
    }

    
export const getGetCoinBySolvedPickQueryOptions = <TData = Awaited<ReturnType<typeof getCoinBySolvedPick>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCoinBySolvedPick>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetCoinBySolvedPickQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getCoinBySolvedPick>>> = ({ signal }) => getCoinBySolvedPick(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getCoinBySolvedPick>>, TError, TData> & { queryKey: QueryKey }
}

export type GetCoinBySolvedPickQueryResult = NonNullable<Awaited<ReturnType<typeof getCoinBySolvedPick>>>
export type GetCoinBySolvedPickQueryError = ErrorType<unknown>

/**
 * @summary 현재 운영중인 QuestionSheet에서 지급된 코인을 반환합니다.
 */
export const useGetCoinBySolvedPick = <TData = Awaited<ReturnType<typeof getCoinBySolvedPick>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getCoinBySolvedPick>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetCoinBySolvedPickQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



