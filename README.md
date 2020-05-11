## React Practices

<pre>
2020-05-06 react

JSX -> ReactDOM API

<App /> 

ReactDOM.createElement
map, filter, spread ...
document.createElement(,,,,)

webpack
babel core
babel preset react
babel preset env

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

React
1) 기본 개념[project-ex07
	1-1) 개발 환경 설정 (Webpack, Babel)

	1-2) 2가지 개념 : 속성(property), 상태(state) **
	<Food name="banana" /> : banana는 속성인데 default 값을 주던가 등의 속성 control 다루기


2) Virtual DOM : ReactDOM API

3) JSX

4) Component
	4-1) Styling
		(1) inline [project-ex08]
		(2) hybrid[외부 css(SASS, LESS), Loader를 사용해서 전처리 필요]
			- css 번들링 [project-ex09]
			- css module [project-ex10]
			- css processor(SAAS, LESS)

	4-2) Form 다루기(Working with Form ( Controller & Uncontrolled ) [ project-ex11 ], [ project-ex12 ]
		- 제어 컴포넌트
			1. 컴포넌트 UI 인터페이스 외부에서는 직접 값(속성)을 변경할 수 없다.
			2. 컴포넌트 UI 인터페이스 외부에서는 직접 값(상태)을 변경할 수 있다.
			3. 외부에서 상태 값을 변경할 수 있는 컴포넌트를 제어 컴포넌트라고 한다.
		- 비제어 컴포넌트
			1. 외부에서 상태 값을 변경할 수 없는 컴포넌트를 비제어 컴포넌트라고 한다.
			2. 비제어 컴포넌트도 사용처가 있다. [ project-ex12 ]

	4-3) 속성 Validation

	4-4) 상태(stateful) 컴포넌트 vs Pure Component [순수 (상태가 없는 컴포넌트) ] : 컴포넌트 작성/중첩

	4-5) 데이터 흐름(개념) & 컴포넌트 통신(부모 자식, callback)

	4-6) 생명주기 (Component Life Circle) & Data Fetching(API 서버 사용)

	4-7) Immutablity(불변성)


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

5) Routing (spa이지만 url이 없는게 아니라 페이지 내부에서 변하는 것)

6) Flux (반응형, 데이터 상태변화 감지 / Reactive Programming : Redux(React.js), WebFlux(Spring), Nuxt(Vue.js )

7) Testing

8) Performance Tunning



</pre>