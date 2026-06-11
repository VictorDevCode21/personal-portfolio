import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { RiTwitterXFill } from 'react-icons/ri';
import { IconType } from 'react-icons';

interface SocialLink {
    href: string;
    label: string;
    Icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: 'https://www.linkedin.com/in/victor-rivas-2a146328b/',
        label: 'LinkedIn',
        Icon: SiLinkedin,
    },
    {
        href: 'https://github.com/VictorDevCode21',
        label: 'GitHub',
        Icon: SiGithub,
    },
    {
        href: 'https://twitter.com/VRWEBDEV',
        label: 'Twitter',
        Icon: RiTwitterXFill,
    },
    {
        href: 'mailto:victorrivaswebdev@gmail.com',
        label: 'Email',
        Icon: SiGmail,
    },
];

function SocialLinks() {
    return (
        <div className="flex items-center gap-4 sm:gap-6">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border-2 border-light-blue text-light-blue
                        transition-colors duration-300 hover:bg-light-blue hover:text-black"
                >
                    <Icon size={20} />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
