/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  DojoApiResponseListFriendInfoResponse
} from '.././model'

export const getGetRecommendFriendsResponseMock = (overrideResponse: Partial< DojoApiResponseListFriendInfoResponse > = {}): DojoApiResponseListFriendInfoResponse => ({data: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()})), undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetFriendsResponseMock = (overrideResponse: Partial< DojoApiResponseListFriendInfoResponse > = {}): DojoApiResponseListFriendInfoResponse => ({data: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()})), undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})


export const getGetRecommendFriendsMockHandler = (overrideResponse?: DojoApiResponseListFriendInfoResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseListFriendInfoResponse> | DojoApiResponseListFriendInfoResponse)) => {
  return http.get('https://docker-ecs.net/recommend-friends', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetRecommendFriendsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetFriendsMockHandler = (overrideResponse?: DojoApiResponseListFriendInfoResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseListFriendInfoResponse> | DojoApiResponseListFriendInfoResponse)) => {
  return http.get('https://docker-ecs.net/friends', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetFriendsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getMemberRelationMock = () => [
  getGetRecommendFriendsMockHandler(),
  getGetFriendsMockHandler()
]