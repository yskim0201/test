import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from "babel-runtime/helpers/interopRequireDefault";
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
    const context = require.context("../src/stories", true, /Story\.jsx$/);
    //context() 함수로 Story로 끝나는 파일 이름 목록 가져오기
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);




// import { configure } from '@storybook/react';

// function loadStories() {
//     require('../src/stories/InputStory')
//     require('../src/stories/NewCounterStory')
//     // 여기에 스토리북 추가
// }

// configure(loadStories, module);