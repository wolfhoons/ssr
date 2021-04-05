import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

// 1. 기본 글꼴을 sans-serif로 설정.
// 2. iOS와 IE에서 기기 회전시에 사용자가 확대하지 않아도 글씨 크기가 재조정되는 것을 예방. 

html { 
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;  
}

body {
  margin: 0;
}

// IE10/11, Firefox 에서 정의되지 않은 'detail' 혹은 'summary'를 'block'으로 지정
// IE11 에서 정의되지 않은 'main'을 'block'으로 지정

article, aside, details, figcaption, figure, footer, 
header, hgroup, main, menu, nav, section, summary {
  display: block; 
}

// Chrome, Firefox, Opera에서 'progress'의 세로 정렬 표준화

audio, canvas, progress, video { 
  display: inline-block; 
  vertical-align: baseline; 
}

// IE10에서 활성화(active)된 링크의 회색 배경 제거
a {
  background-color: transparent;
}

// active/hover 상태에도 포커스된 요소의 가독성 향상
a:active, a:hover {
  outline: 0;
}

// Firefox 4+, Safari, Chrome에서 'bolder'로 설정되어 있는 것을 'bold'로 수정

b, strong {
  font-weight: bold;
}

// Firefox 4+, Safari, Chrome에서 'section' 과 'article' 내부의 'h1' 요소의 글꼴 크기와 마진값이 서로 다른 것을 통일시킴.

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

// IE8/ 9/ 10에서 'a'요소안의 이미지가 위치할 경우 생기는 테두리 제거

img { 
  border: 0;
}

// color, font 속성이 상속되지 않는 것을 수정.
// firefox 4+, Safari, Chrome의 마진이 서로 다른 것을 해결.

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

// 테이블 요소 사이 간격을 제거

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td, th {
  padding: 0;
}
`;

export default GlobalStyle;
