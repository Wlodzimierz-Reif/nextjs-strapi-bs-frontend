import { NextResponse } from "next/server";

export function middleware(request) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0NTYwMzUyLCJleHAiOjE2NzcxNTIzNTJ9.w_o04Zob4fglqd6Zx5v4_5stjptJoFfHWfVOOAu-qg0",
  // );

  // // You can also set request headers in NextResponse.rewrite
  // const response = NextResponse.next({
  //   request: {
  //     // New request headers
  //     headers: requestHeaders,
  //   },
  // });

  // response.cookies.set("testCookie", "test", {
  //   maxAge: 6,
  //   secure: false,
  //   httpOnly: false,
  // });
  // console.log("all cookies: ", request.cookies.getAll());

  // // Set a new response header `x-hello-from-middleware2`
  // // response.headers.set("x-hello-from-middleware2", "hello");
  // response.headers.set(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0NTYwMzUyLCJleHAiOjE2NzcxNTIzNTJ9.w_o04Zob4fglqd6Zx5v4_5stjptJoFfHWfVOOAu-qg0",
  // );

  // console.log(response.headers.get("authorization"))
  // return response;
  return null;
}

// export const config = {
//   matcher: '/login',
// }
