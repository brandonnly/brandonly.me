/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
    const { siteTitle } = useSiteMetadata()

    return (
        <footer
            sx={{
                boxSizing: `border-box`,
                display: `flex`,
                justifyContent: `space-between`,
                mt: [6],
                color: `secondary`,
                a: {
                    variant: `links.secondary`,
                },
                flexDirection: [`column`, `column`, `row`],
                variant: `dividers.top`,
            }}
        >
            <div>
                &copy; Brandon Ly {new Date().getFullYear()}
            </div>
            <div>
                <Link
                    aria-label="Link to the GitHub repository"
                    href="https://github.com/brandonnly/blog">
                    Made with GatsbyJS and Markdown
                </Link>
            </div>
        </footer>
    )
}

export default Footer
