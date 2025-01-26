import "./Error.css"

export default function Error({ details }: ErrorProps) {
    return (
        <div className="error">
            <h1>{details ?? "404 - Not Found"}</h1>
            <div className="img-wrapper">
                <img src="/assets/broken-cookie.png" alt="Error" />
            </div>
        </div>
    )
}

export type ErrorProps = {
    details?: string
}