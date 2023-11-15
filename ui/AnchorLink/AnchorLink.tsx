import AnchorLink from 'react-anchor-link-smooth-scroll'

const AnchorLinkUI = ({
  children,
  href,
  className
}: {
  children: React.ReactNode
  href: string
  className: string
}) => {
  return (
    <AnchorLink href={href} className={className}>
      {children}
    </AnchorLink>
  )
}

export default AnchorLinkUI
