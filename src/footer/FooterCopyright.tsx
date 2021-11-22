import Link from 'next/link'

const FooterCopyright = () => (
  <div className="footer-copyright">    
    <div>
    {/* Made with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '} */}
    <Link href="https://www.linkedin.com/in/kishor-shivsharan-40781b179/">
    Developed by Kishor Shivsharan
    </Link>
    </div>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
