import React from 'react';
import {HashRouter} from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <div className="border-l border-gray-100 p-5">
                <h1 className="text-base font-medium">Related products</h1>
                <ul className="flex flex-col">
                    <li className="cursor-pointer">
                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red-thumb.jpg" />
                    </li>
                    <li className="cursor-pointer">
                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green-thumb.jpg" />
                    </li>
                    <li className="cursor-pointer">
                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue-thumb.jpg" />
                    </li>
                </ul>
            </div>
        </HashRouter>
    );
}

export default App;
