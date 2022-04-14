import React from 'react';
import MENU from './04/MENU';


class App extends React.Component {
    render( ) {
        const low = [{menu : "제육볶음", price : 7000},
        {menu : "김치찌개", price : 8500},
        {menu : "참치김치찌개", price : 9000},
        {menu : "알밥", price : 7000}
        ]
        
        const high = [{menu : "된장찌개", price : 7700},
        {menu : "라면", price : 4000},
        {menu : "우동", price : 6500},
        {menu : "치킨", price : 15000}
        ]
        
        return (
                <MENU
                    low = {low}
                    high = {high}
                />
        );
    }
}

export default App;