import React from "react";

interface ErrorProps {
    message: string;
}

export default function Error({message}:ErrorProps)
{
    return React.createElement(`p`, {style: {color: 'red'}}, message)
}