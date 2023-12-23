import { SVGProps } from "react"

export const Css = (
{
    width,
    height,
    fill,
    ...props
}: SVGProps<SVGSVGElement>) => {
    return(
        <svg {...props} width={width || 28} height={height || 32} viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L2.5504 28.8896L13.6 32L24.6496 28.8896L27.2 0H0ZM21.7232 9.3632L13.5904 13L13.5696 13.008H21.4368L20.536 23.8272L13.6016 25.944L13.5904 25.9392V25.944L6.6176 23.7872L6.1696 18.3392H9.6288L9.8528 21.1616L13.5584 22.1392L13.5904 22.1296V22.1344L17.4256 21.0048L17.688 16.4576L13.5904 16.4448L5.9424 16.4192L5.6816 13.008L13.5904 9.5632L14.0512 9.3632H5.3824L4.968 5.8752H22.0608L21.7232 9.3632Z" fill={fill || 'var(--white-100)'} />
        </svg>
    )
}