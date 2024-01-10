/** @type {import('next').NextConfig} */
//import하는데 nextconfig부터 import해서 next.config.js 설정을 가져와라 그러면 그 설정에 있는 이 타입이.
//next.config.js라는 이 타입을 변수에 지정해주게 됩니다.

const nextConfig = {}
//기본적으로 nextConfig는 빈 객체로 존재한다.
/**
 * 마이그레이션에 필요한 값
 * 1. output
 * 빌드 이후 생성된 파일을 어디에 둘지 경정하는 설정이다. 각 설정에 따라 어떤 환경에서 next.js를 운용할지 결정할수 있다.
 * undefined : 이게 기본값./
 */

module.exports = nextConfig
