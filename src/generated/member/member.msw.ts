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
  DojoApiResponseFriendSpacePickResponse,
  DojoApiResponseListMemberSearchResponse,
  DojoApiResponseMemberCreateResponse,
  DojoApiResponseMemberLoginResponse,
  DojoApiResponseMemberProfileResponse,
  DojoApiResponseMemberRelationId,
  DojoApiResponseMemberUpdateResponse,
  DojoApiResponseMyProfileResponse,
  DojoApiResponseMySpacePickResponse
} from '.././model'

export const getCreateResponseMock = (overrideResponse: Partial< DojoApiResponseMemberCreateResponse > = {}): DojoApiResponseMemberCreateResponse => ({data: faker.helpers.arrayElement([{id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getLoginResponseMock = (overrideResponse: Partial< DojoApiResponseMemberLoginResponse > = {}): DojoApiResponseMemberLoginResponse => ({data: faker.helpers.arrayElement([{authToken: faker.word.sample(), id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getCreateFriendResponseMock = (overrideResponse: Partial< DojoApiResponseMemberRelationId > = {}): DojoApiResponseMemberRelationId => ({data: faker.helpers.arrayElement([{value: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getUpdateResponseMock = (overrideResponse: Partial< DojoApiResponseMemberUpdateResponse > = {}): DojoApiResponseMemberUpdateResponse => ({data: faker.helpers.arrayElement([{id: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProfileResponseMock = (overrideResponse: Partial< DojoApiResponseMemberProfileResponse > = {}): DojoApiResponseMemberProfileResponse => ({data: faker.helpers.arrayElement([{friendCount: faker.number.int({min: undefined, max: undefined}), isFriend: faker.datatype.boolean(), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getSearchMemberResponseMock = (overrideResponse: Partial< DojoApiResponseListMemberSearchResponse > = {}): DojoApiResponseListMemberSearchResponse => ({data: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({isFriend: faker.datatype.boolean(), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()})), undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getMySpaceResponseMock = (overrideResponse: Partial< DojoApiResponseMySpacePickResponse > = {}): DojoApiResponseMySpacePickResponse => ({data: faker.helpers.arrayElement([{mySpaceResponses: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, pickContent: faker.word.sample(), pickCount: faker.number.int({min: undefined, max: undefined}), pickId: faker.word.sample(), questionId: faker.word.sample(), rank: faker.number.int({min: undefined, max: undefined})}))}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProfileMockResponseMock = (overrideResponse: Partial< DojoApiResponseMemberProfileResponse > = {}): DojoApiResponseMemberProfileResponse => ({data: faker.helpers.arrayElement([{friendCount: faker.number.int({min: undefined, max: undefined}), isFriend: faker.datatype.boolean(), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getMeResponseMock = (overrideResponse: Partial< DojoApiResponseMyProfileResponse > = {}): DojoApiResponseMyProfileResponse => ({data: faker.helpers.arrayElement([{friendCount: faker.number.int({min: undefined, max: undefined}), memberId: faker.word.sample(), memberName: faker.word.sample(), ordinal: faker.number.int({min: undefined, max: undefined}), pickCount: faker.number.int({min: undefined, max: undefined}), pickedCount: faker.number.int({min: undefined, max: undefined}), platform: faker.word.sample(), profileImageUrl: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getFriendSpaceResponseMock = (overrideResponse: Partial< DojoApiResponseFriendSpacePickResponse > = {}): DojoApiResponseFriendSpacePickResponse => ({data: faker.helpers.arrayElement([{friendSpaceResponses: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, pickContent: faker.word.sample(), pickCount: faker.number.int({min: undefined, max: undefined}), pickId: faker.word.sample(), questionId: faker.word.sample(), rank: faker.number.int({min: undefined, max: undefined})}))}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})


export const getCreateMockHandler = (overrideResponse?: DojoApiResponseMemberCreateResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DojoApiResponseMemberCreateResponse> | DojoApiResponseMemberCreateResponse)) => {
  return http.post('https://docker-ecs.net/public/member', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getLoginMockHandler = (overrideResponse?: DojoApiResponseMemberLoginResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DojoApiResponseMemberLoginResponse> | DojoApiResponseMemberLoginResponse)) => {
  return http.post('https://docker-ecs.net/public/member-login', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getLoginResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreateFriendMockHandler = (overrideResponse?: DojoApiResponseMemberRelationId | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DojoApiResponseMemberRelationId> | DojoApiResponseMemberRelationId)) => {
  return http.post('https://docker-ecs.net/member/friend', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateFriendResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdateMockHandler = (overrideResponse?: DojoApiResponseMemberUpdateResponse | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<DojoApiResponseMemberUpdateResponse> | DojoApiResponseMemberUpdateResponse)) => {
  return http.patch('https://docker-ecs.net/member/:id', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdateResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetProfileMockHandler = (overrideResponse?: DojoApiResponseMemberProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMemberProfileResponse> | DojoApiResponseMemberProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/:memberId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProfileResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getSearchMemberMockHandler = (overrideResponse?: DojoApiResponseListMemberSearchResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseListMemberSearchResponse> | DojoApiResponseListMemberSearchResponse)) => {
  return http.get('https://docker-ecs.net/member/search', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getSearchMemberResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getMySpaceMockHandler = (overrideResponse?: DojoApiResponseMySpacePickResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMySpacePickResponse> | DojoApiResponseMySpacePickResponse)) => {
  return http.get('https://docker-ecs.net/member/my-space/pick', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getMySpaceResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetProfileMockMockHandler = (overrideResponse?: DojoApiResponseMemberProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMemberProfileResponse> | DojoApiResponseMemberProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/mock/:memberId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProfileMockResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getMeMockHandler = (overrideResponse?: DojoApiResponseMyProfileResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseMyProfileResponse> | DojoApiResponseMyProfileResponse)) => {
  return http.get('https://docker-ecs.net/member/me', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getMeResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getFriendSpaceMockHandler = (overrideResponse?: DojoApiResponseFriendSpacePickResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DojoApiResponseFriendSpacePickResponse> | DojoApiResponseFriendSpacePickResponse)) => {
  return http.get('https://docker-ecs.net/member/friend-space/:friendId/pick', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getFriendSpaceResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getMemberMock = () => [
  getCreateMockHandler(),
  getLoginMockHandler(),
  getCreateFriendMockHandler(),
  getUpdateMockHandler(),
  getGetProfileMockHandler(),
  getSearchMemberMockHandler(),
  getMySpaceMockHandler(),
  getGetProfileMockMockHandler(),
  getMeMockHandler(),
  getFriendSpaceMockHandler()
]
