/** @type {import('next').NextConfig} */
//import하는데 nextconfig부터 import해서 next.config.js 설정을 가져와라 그러면 그 설정에 있는 이 타입이.
//next.config.js라는 이 타입을 변수에 지정해주게 됩니다.

const nextConfig = {}
//기본적으로 nextConfig는 빈 객체로 존재한다.
/**
 * 마이그레이션에 필요한 값
 * 1. output
 * 빌드 이후 생성된 파일을 어디에 둘지 경정하는 설정이다. 각 설정에 따라 어떤 환경에서 next.js를 운용할지 결정할수 있다.
 * undefined : 아무것도 하지 않았을때 이게 기본값이다 .next 폴더에 빌드, vercel과 같은 호스팅 서비스에 사용할 때 쓰인다.
 * standalone : .next/standalone 폴더에 새로 만들고 그 안에 빌드가 된다. 셀프 호스팅하는 경우 사용
 * export : 정적인 css,html,js 파일만 남긴다. 노드 서버 없이 셀프 포스팅하는 경우에 쓸수있다.
 * distDir : .next가 아닌 다른 폴더이름으로 만들고싶을때
 * basePath : 앱의 경로 접두사를 지정하는 설정, 예를 들어 basePath: '/docs'라고하면 ''빈문자열대신 /docs라고한다.
 *            Link는 자동으로 /docs를 추가해주지만 Image 태그는 src에 /docs를 붙여줘야 한다는 점
 * images : image 컴포넌트를 사용하면 이미지를 자동으로 최적화합니다. 이때 외부에 저장된 이미지를 사용하기 위해 추가 설정이 필요합니다.
 */

module.exports = nextConfig
