# React 애플리케이션으로 리팩토링

<pre>
    1~5 까지는 project-ex05와 동일


6. React Refactoring
    -- react 라이브러리 패키지 설치
        $ npm i -D react react-dom
    
    -- index.js, App.js 코드 수정

7. 번들링 : 하지않으면  ReactDOM.render(<App/>, document.getElementById('root'))을 알아먹지 못한다.
    -- Babel 설치 (preset : 미리 정해놓은 집합의 느낌)
        / env : es6 -> es5  / 
        / react : jsx -> javascript /
        / loader : webpack 플러그인 같은 것 /
        / core : 작동시키는 것 /
        $ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
        -- babel-loader 설정 (webpack.config.js)
        -- babel 설정 (babel.config.json)

</pre>