# React Component - Styling(외부 CSS 파일 번들링)

<pre>
    1. mkdir project-ex09
        cd project-ex09
        
    2. npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react

    3. project-ex07의 src / public / webpack.config.js / babel.config.json 복사

    4. npm scripting 적용 ( package.json )
     "scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
    }

    5. 애플리케이션 작성 ( App.js 작성)

    6. App.css 작성

    7. style-loader , css-loader 설치
        npm i -D style-loader css-loader

    8. loader 설정 (webpack.config.js)

    9. 서버 실행 및 테스팅

    10. Common.css 추가

   [출처 - https://github.com/kickscar-javascript/basic-practices/tree/master/ch02/07/practice06] 
</pre>