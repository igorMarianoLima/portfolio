import { PropsWithChildren } from "react"
import { Navbar } from "../core/components/navbar/Navbar.component"
import { Footer } from "../core/components/footer/Footer.component"

export const DefaultLayout = ({
    children
}: PropsWithChildren) => {
    return(
        <>
            <Navbar />

            <main role="main">
                { children }
            </main>

            <Footer />
        </>
    )
}