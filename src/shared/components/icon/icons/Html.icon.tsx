import { SVGProps } from "react"

export const Html = (
{
    width,
    height,
    fill,
    ...props
}: SVGProps<SVGSVGElement>) => {
    return(
        <svg {...props} width={width || 29} height={height || 32} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L2.568 28.8L14.092 32L25.646 28.796L28.218 0H0ZM22.628 9.42H9.112L9.434 13.038H22.308L21.338 23.882L14.092 25.89L6.856 23.882L6.362 18.334H9.908L10.16 21.154L14.094 22.214L14.102 22.212L18.038 21.15L18.446 16.57H6.204L5.252 5.888H22.946L22.628 9.42Z" fill={fill || 'var(--white-100)'} />
        </svg>
    )
}