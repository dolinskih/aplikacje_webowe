import React from 'react'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Blog from '../pages/blog'
import BlogPost from '../pages/blogpost'

interface RouteItem{
    path: string, 
    element: React.JSX.Element,
    label: string,
    hideInMenu?: boolean
}

//export const routes: RouteItem[] = []
export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <Homepage/>,
        label: "Homepage",
    },
    {
        path: "/about",
        element: <About/>,
        label: "About us"
    },
    {
        path: "/blog",
        element: <Blog/>,
        label: "Blog"
    },
    {
        path:"/blog/:id",
        element: <BlogPost/>,
        label: 'Blog Post',
        hideInMenu: true
    }
]