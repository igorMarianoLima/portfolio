import { SVGProps } from "react"

export const ReactNative = (
{
    width,
    height,
    stroke,
    ...props
}: SVGProps<SVGSVGElement>) => {
    return(
        <svg {...props} width={width || 32} height={height || 29} viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53553 10.0003C3.58001 11.0203 1 12.7678 1 14.7629C1 17.9234 7.60753 20.5004 15.7751 20.5004C16.8851 20.5004 17.6651 20.4419 18.7001 20.3549" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.7559 20.3504C12.1364 19.4564 11.5469 18.6509 10.9859 17.6504C6.85941 10.3004 5.75391 2.99534 8.54092 1.34084C10.2659 0.295331 13.1114 1.72034 16.002 4.72185" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.64358 19.5809C6.59058 23.6129 6.80358 26.6549 8.48359 27.6734C11.1581 29.2934 16.5641 24.7364 20.5481 17.4674C21.0881 16.4624 21.5726 15.4739 22.0001 14.5004" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 24.2804C18.892 27.2804 21.7255 28.7054 23.467 27.6599C26.242 26.0069 25.1485 18.7019 21.0175 11.3504C20.4415 10.3349 19.852 9.54436 19.2475 8.65036" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.4901 19.0004C28.4081 17.9699 31.0001 16.2254 31.0001 14.2364C31.0001 11.0714 24.3881 8.5004 16.2326 8.5004C15.1121 8.5004 14.3336 8.5439 13.3 8.6309" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14.5004C10.4275 13.5104 10.9105 12.5384 11.452 11.5334C15.4225 4.26734 20.8315 -0.30168 23.5211 1.33183C25.1861 2.35033 25.4141 5.39084 24.3611 9.42136M16.39 14.5229H16.375C16.36 14.7179 16.195 14.8829 15.985 14.8829C15.8846 14.8779 15.7898 14.8348 15.7201 14.7623C15.6504 14.6898 15.611 14.5934 15.61 14.4929C15.61 14.2829 15.775 14.1179 15.97 14.1179H15.955C16.15 14.1029 16.33 14.2829 16.33 14.4779" stroke={stroke || 'var(--white-100)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}