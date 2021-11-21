const FooterCopyright = () => (
  <div className="footer-copyright">    
    <div>
    {/* Made with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '} */}
    Developed by Kishor Shivsharan
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
