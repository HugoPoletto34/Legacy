import NavBar from "../components/NavBar";
import styled from 'styled-components'
import { useEffect, useState } from "react";


export default function Layout({ children }: any) {
    const [colorNav, setColorNav] = useState(false);

    useEffect(() => {
        function posicaoScroll() {
            if (window.scrollY > 10) {
                setColorNav(true)
            }
            else {
                setColorNav(false)
            }
        }

        window.addEventListener('scroll', posicaoScroll)
    }, [])
    
    return (
        <div>
            <NavBar colorNav={colorNav} />
            {children}
        </div>
    )
}
