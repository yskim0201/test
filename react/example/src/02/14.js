//import 구문 활용
import MyModyle from './MyModule'; //기본적으로 공유하는 모듈을 불러옴
import { ModuleName } from './MyModule'; // 제공되는 특정 변수, 함수만 불러올 수 도 있음
import { ModuleName as RenamedModuleName } from './MyModule'; 
// 이름이 충돌될 것 같으면 다른 이름으로 변경 가능

function Func() {
    MyModule();
}

export const CONST_VALUE = 0; //변수, 클래스, 함수를 다른 파일에서 참조하도록 함
export class MyClass{}
export default new Func(); //기본으로 참조되는 항목 지정