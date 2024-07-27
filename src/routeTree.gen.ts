/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VoteLayoutImport } from './routes/_vote-layout'
import { Route as IndexImport } from './routes/index'
import { Route as OnboardIndexImport } from './routes/onboard/index'
import { Route as MyPickIndexImport } from './routes/my-pick/index'
import { Route as MyPickPickIdImport } from './routes/my-pick/$pickId'
import { Route as VoteLayoutVoteIndexImport } from './routes/_vote-layout/vote/index'
import { Route as VoteLayoutVoteDoneImport } from './routes/_vote-layout/vote/done'

// Create/Update Routes

const VoteLayoutRoute = VoteLayoutImport.update({
  id: '/_vote-layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OnboardIndexRoute = OnboardIndexImport.update({
  path: '/onboard/',
  getParentRoute: () => rootRoute,
} as any)

const MyPickIndexRoute = MyPickIndexImport.update({
  path: '/my-pick/',
  getParentRoute: () => rootRoute,
} as any)

const MyPickPickIdRoute = MyPickPickIdImport.update({
  path: '/my-pick/$pickId',
  getParentRoute: () => rootRoute,
} as any)

const VoteLayoutVoteIndexRoute = VoteLayoutVoteIndexImport.update({
  path: '/vote/',
  getParentRoute: () => VoteLayoutRoute,
} as any)

const VoteLayoutVoteDoneRoute = VoteLayoutVoteDoneImport.update({
  path: '/vote/done',
  getParentRoute: () => VoteLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_vote-layout': {
      id: '/_vote-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof VoteLayoutImport
      parentRoute: typeof rootRoute
    }
    '/my-pick/$pickId': {
      id: '/my-pick/$pickId'
      path: '/my-pick/$pickId'
      fullPath: '/my-pick/$pickId'
      preLoaderRoute: typeof MyPickPickIdImport
      parentRoute: typeof rootRoute
    }
    '/my-pick/': {
      id: '/my-pick/'
      path: '/my-pick'
      fullPath: '/my-pick'
      preLoaderRoute: typeof MyPickIndexImport
      parentRoute: typeof rootRoute
    }
    '/onboard/': {
      id: '/onboard/'
      path: '/onboard'
      fullPath: '/onboard'
      preLoaderRoute: typeof OnboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/_vote-layout/vote/done': {
      id: '/_vote-layout/vote/done'
      path: '/vote/done'
      fullPath: '/vote/done'
      preLoaderRoute: typeof VoteLayoutVoteDoneImport
      parentRoute: typeof VoteLayoutImport
    }
    '/_vote-layout/vote/': {
      id: '/_vote-layout/vote/'
      path: '/vote'
      fullPath: '/vote'
      preLoaderRoute: typeof VoteLayoutVoteIndexImport
      parentRoute: typeof VoteLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  VoteLayoutRoute: VoteLayoutRoute.addChildren({
    VoteLayoutVoteDoneRoute,
    VoteLayoutVoteIndexRoute,
  }),
  MyPickPickIdRoute,
  MyPickIndexRoute,
  OnboardIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_vote-layout",
        "/my-pick/$pickId",
        "/my-pick/",
        "/onboard/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_vote-layout": {
      "filePath": "_vote-layout.tsx",
      "children": [
        "/_vote-layout/vote/done",
        "/_vote-layout/vote/"
      ]
    },
    "/my-pick/$pickId": {
      "filePath": "my-pick/$pickId.tsx"
    },
    "/my-pick/": {
      "filePath": "my-pick/index.tsx"
    },
    "/onboard/": {
      "filePath": "onboard/index.tsx"
    },
    "/_vote-layout/vote/done": {
      "filePath": "_vote-layout/vote/done.tsx",
      "parent": "/_vote-layout"
    },
    "/_vote-layout/vote/": {
      "filePath": "_vote-layout/vote/index.tsx",
      "parent": "/_vote-layout"
    }
  }
}
ROUTE_MANIFEST_END */
