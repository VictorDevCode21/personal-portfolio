export interface Project {
    id: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
    url: string;
}

// Static project list: no database needed, images live in /public/images
export const projects: Project[] = [
    {
        id: 'yasaprint3d',
        name: 'YasaPrint3D',
        imageSrc: '/images/yasa3d.png',
        imageAlt: 'YasaPrint3D website preview',
        url: 'https://www.yasaprint3d.com/',
    },
    {
        id: 'dkcargo',
        name: 'DK Cargo',
        imageSrc: '/images/dkcargo.png',
        imageAlt: 'DK Cargo website preview',
        url: 'https://www.dkcargo.net/',
    },
    {
        id: 'personal-portfolio',
        name: 'Personal Portfolio',
        imageSrc: '/images/Example-project.JPG',
        imageAlt: 'Personal portfolio website preview',
        // TODO: replace with the live URL once this portfolio is deployed
        url: '#',
    },
    {
        id: 'corpesca',
        name: 'Corpesca',
        imageSrc: '/images/e-commerce_corpesca_1.png',
        imageAlt: 'Corpesca e-commerce website preview',
        url: 'https://corpesca.net/',
    },
    {
        id: 'bululu-hospitality',
        name: 'Bululu Hospitality',
        imageSrc: '/images/bululu.png',
        imageAlt: 'Bululu Hospitality website preview',
        url: 'https://www.bululuhospitality.com/',
    },
    {
        id: 'piso-decopint',
        name: 'PisoDecopint',
        imageSrc: '/images/Decopint.PNG',
        imageAlt: 'PisoDecopint website preview',
        url: 'https://pisodecopint.com/',
    },
    {
        id: 'bh-creative',
        name: 'BH Creative',
        imageSrc: '/images/bhcreative.PNG',
        imageAlt: 'BH Creative website preview',
        url: 'https://www.bhcreativecorp.com/',
    },
    {
        id: 'imaliandme',
        name: 'ImaliandMe',
        imageSrc: '/images/imaliandme.png',
        imageAlt: 'ImaliandMe website preview',
        url: 'https://www.imaliandme.com/',
    },
];
