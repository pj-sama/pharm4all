import Partners from "../components/partners/Partners";
import PromisePreview from "../components/promisepreview/PromisePreview";
import Services from "../components/services/Services";
import Slideshow from "../components/slideshow/Slideshow";


export default function Home() {
    return (
        <>
            <Slideshow />
            <Services />
            <PromisePreview />
            <Partners />
        </>
    )
}
