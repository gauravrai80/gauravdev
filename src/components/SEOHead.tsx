import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalPath?: string;
    ogImage?: string;
    keywords?: string;
    noindex?: boolean;
}

const SITE_URL = 'https://gauravrdev.netlify.app';

const SEOHead = ({
    title,
    description,
    canonicalPath = '/',
    ogImage = '/profile.png',
    keywords,
    noindex = false,
}: SEOHeadProps) => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Gaurav Rai Portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={absoluteOgImage} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteOgImage} />
        </Helmet>
    );
};

export default SEOHead;
