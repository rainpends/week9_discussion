import { useState } from "react";
import TempInputField from "./TempInputField";

export default function TempConverter() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)

    function changeCelsiusHandler(e) {
        setCelsius(e.target.value)
        setFahrenheit(e.target.value * (9 / 5) + 32)
    }

    function changeFahrenheitHandler(e) {
        setFahrenheit(e.target.value)
        setCelsius((e.target.value - 32) * (5 / 9))
    }

    return (
        <>
            <TempInputField value={celsius} unit={"C"} handler={changeCelsiusHandler} /><br />
            <TempInputField value={fahrenheit} unit={"F"} handler={changeFahrenheitHandler} />
        </>
    )
}