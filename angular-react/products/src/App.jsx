import React from 'react';

function App() {
    return (
        <div style={{width: 200}} className="relative border-dashed border-2 border-green-300 p-2 rounded">
            <div className="absolute -top-8 left-0 text-green-300 font-bold">ReactJS (<a target="_blank" href="https://github.com/dotuan9x/micro-frontends/tree/master/angular-react/products" rel="noreferrer">products</a>) </div>
            <h1 className="text-base font-medium">Related products</h1>
            <ul className="flex flex-col">
                <li className="cursor-pointer">
                    <img style={{width: 180}} alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red.jpg" />
                </li>
                <li className="cursor-pointer">
                    <img style={{width: 180}} alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green.jpg" />
                </li>
                <li className="cursor-pointer">
                    <img style={{width: 180}} alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue.jpg" />
                </li>
            </ul>
        </div>
    );
}

export default App;
