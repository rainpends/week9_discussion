import { useState } from "react";

export default function TempInputField(props) {
    const { unit, value, handler } = props
    return (
        <>
            <input type="number" value={value} onChange={handler} /> {unit}
        </>
    )
}