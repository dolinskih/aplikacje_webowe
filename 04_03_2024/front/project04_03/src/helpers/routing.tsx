import React from 'react'
import Homepage from '../pages/Homepage'
import Psy from '../pages/Psy'
import Psy_dane from '../pages/Psy_dane'
import Opiekunowie from '../pages/Opiekunowie'
import Karmienie from '../pages/Karmienie'
import Spacery from '../pages/Spacery'

interface RouteItem{
    path: string, 
    element: React.JSX.Element,
    label: string,
}

//export const routes: RouteItem[] = []
export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <Homepage/>,
        label: "Homepage"
    },
    {
        path: "/psy",
        element: <Psy/>,
        label: "Psy"
    },
    {
        path: "/psy_dane",
        element: <Psy_dane/>,
        label: "Dane psów"
    },
    {
        path: "/opiekunowie",
        element: <Opiekunowie/>,
        label: "Opiekunowie"
    },
    {
        path: "/karmienie",
        element: <Karmienie/>,
        label: "Karmienie"
    },
    {
        path: "/spacery",
        element: <Spacery/>,
        label: "Spacery"
    }
]