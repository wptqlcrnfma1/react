import React from 'react';

class App extends React.Component{
    render(){ //오버라이드 해줘야한다. 무조건 만들어야한다. DOM이 다시 그리는 일이 있으면 컴포넌트를 호출 > 상태가 바뀐 render 호출
        const message = 'Hello React'; // 자바스크립트 코드 ,헷갈릴수있다.
        //return (<h1>{ message }</h1>); // html이 아니다. 나중에 컴포넌트(리액트 함수)로 바뀐다.

        const h1Stylte = { //인라인 style
            width : 180,
            height : 80,
            apdding : 5,
            color : '#fff',
            backgroundColor : '#000'
        };

         return (<h1 style = {h1Stylte}>{message}</h1>); //클래스 쓰러면
    }
}

export { App };
