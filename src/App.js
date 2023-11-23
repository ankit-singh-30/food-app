import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

const App = () => {
    return (
        <>
            <div className="relative flex flex-col w-full">
                <Header />
                <MainContainer />
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
