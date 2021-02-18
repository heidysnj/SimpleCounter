import React, { useState, useEffect } from "react";

export function Home() {
    const [time, setTime] = useState(0);
    const [time2, setTime2] = useState(0);
    const [time3, setTime3] = useState(0);
    const [time4, setTime4] = useState(0);
    const [time5, setTime5] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
    }, []);
    if (time === 10) {
        setTime(0);
        setTime2(time2 + 1);
    }
    if (time === 100) {
        setTime2(0);
        setTime3(time3 + 1);
    }
    if (time === 1000) {
        setTime3(0);
        setTime4(time4 + 1);
    }
    if (time === 10000) {
        setTime4(0);
        setTime5(time5 + 1);
    }

    return (
        <div className="text-center mt-5">
            <div className="row">
                <div className="card bg-dark" style={{ width: " 18rem" }}>
                    <i className="far fa-clock"></i></div>
                <div className="col-2 card bg-dark" style={{ width: " 18rem" }}>
                    <h1 style={{ color: "white" }}>{time5}</h1>
                </div>
                <div className="col-2 card bg-dark" style={{ width: " 18rem" }}>
                    <h1 style={{ color: "white" }}>{time4}</h1>
                </div>
                <div className="col-2 card bg-dark" style={{ width: " 18rem" }}>
                    <h1 style={{ color: "white" }}>{time3}</h1>
                </div>
                <div className="col-2 card bg-dark" style={{ width: " 18rem" }}>
                    <h1 style={{ color: "white" }}>{time2}</h1>
                </div>
                <div className="col-2 card bg-dark" style={{ width: " 18rem" }}>
                    <h1 style={{ color: "white" }}>{time}</h1>
                </div>
            </div>
        </div>
    );
}
