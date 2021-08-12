import React from 'react';

function App() {
    return (
        <React.Suspense fallback={null}>
            <div style={{width: 1000}} className="relative container mx-auto flex flex-row m-10 border-dashed border-2 border-red-500 rounded">
                <div className="absolute -top-7 text-red-500 font-bold">Team Core (<a target="_blank" href="https://github.com/dotuan9x/micro-frontends/tree/master/react-example/container" rel="noreferrer">container</a>) </div>
                <div className="flex flex-col w-full p-5" style={{width: 790}}>
                    <div className="flex flex-row w-full justify-between">
                        <h1 className="text-lg font-bold">The Model Store</h1>
                        <div>Orders: 0 items</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-2/3">
                            <img alt="" src="https://micro-frontends.tuando.net/images/example/tractor-red.jpg" />
                        </div>
                        <div className="w-1/3 pt-10">
                            <label className="text-lg font-medium">Tractor Porsche-Diesel Master 419</label>
                            <ul className="flex flex-row">
                                <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                    <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red-thumb.jpg" />
                                </li>
                                <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                    <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green-thumb.jpg" />
                                </li>
                                <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                    <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue-thumb.jpg" />
                                </li>
                            </ul>
                            <button className="font-medium hover:bg-gray-50 border border-gray-300 rounded p-3 mt-10">Buy for 66,00 $</button>
                        </div>
                    </div>
                </div>
                <div className="p-1" style={{width: 210}}>
                    <iframe className="w-full h-full" src="https://micro-frontends.tuando.net/demo/react-example/products#/" />
                </div>
            </div>
        </React.Suspense>
    );
}

export default App;
