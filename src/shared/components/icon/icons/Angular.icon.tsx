import { SVGProps } from "react"

export const Angular = (
{
    width,
    height,
    fill,
    ...props
}: SVGProps<SVGSVGElement>) => {
    return(
        <svg {...props} width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8884 0L30.7768 5.30526L28.52 25.0105L15.8884 32L3.25684 25.0105L1 5.30526L15.8884 0ZM15.8884 3.53684L6.57474 24.4211H10.0442L11.9137 19.7389H19.8295L21.6989 24.4211H25.1516L15.8884 3.53684ZM18.6168 16.8421H13.1768L15.8884 10.3242L18.6168 16.8421Z" fill={fill || "var(--white-100)"}/>
        </svg>
    )
}