import "./Error.css"
import brokenCookie from '../assets/broken-cookie.png'

export default function Error({ details }: ErrorProps) {
    return (
        <div className="error">
            <h1>{details ?? "404 - Not Found"}</h1>
            <div className="img-wrapper">
                <img src={brokenCookie} alt="Error" />
            </div>
        </div>
    )
}

export type ErrorProps = {
    details?: string
}