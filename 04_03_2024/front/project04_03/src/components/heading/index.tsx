import React from "react";

interface HeadingProps {
    title: string;
    level?: number;
}

export default function Heading({title, level = 1}:HeadingProps)
{
    return React.createElement(`h${level}`, {}, title)
}