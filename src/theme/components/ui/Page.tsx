import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps } from 'docz'
import { useWindowSize } from 'react-use'
import styled from 'styled-components'

import { Container } from './Container'
import { Sidebar, Topbar } from '@components/shared'
import { breakpoints } from '@styles/responsive'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import algorithmshub from '@images/algorithmshub.png'

const Wrapper = styled.div`
  flex: 1;
  margin-top: 60px;

  ${Container} {
    display: flex;
    min-height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 10px', '0 20px'],
      })}
  }
`

const Document = styled.div`
  max-width: 100%;

  ${p =>
    p.theme.mq({
      paddingTop: ['10px', '30px'],
    })}
`

export const Page: SFC<PageProps> = ({ children, doc, location }) => {
  const { parent, fullpage } = doc
  const { width } = useWindowSize()
  const isAtLeastDesktop = width > breakpoints.tablet
  const showSidebar = Boolean(parent)
  const menuParent = parent || doc.name
  const pathname = location && location.pathname

  return (
    <React.Fragment>
      {/* Customize */}
      <HelmetProvider>
        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href="" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="algorithmshub" />
          <link rel="apple-touch-icon" href="" />
          <link rel="shortcut icon" type="image/x-icon" href="" />

          <title>{`${doc.name} | AlgorithmsHub`}</title>
          <meta
            name="description"
            content={`${doc.name} | Open-source resource for learning data structures & algorithms and their implementation in any programming language with flowchart.`}
          />
          <meta
            name="keywords"
            content="algorithm, algorithms, algorithmshub, algorithms hub, algorithmhub, algorithm hub, datastructure, data structure, datastructures, data structures"
          />
          <meta name="author" content="Bunlong Van" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          
          <meta property="og:url" content="https://algorithmshub.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${doc.name} | AlgorithmsHub`} />
          <meta
            property="og:description"
            content={`${doc.name} | Open-source resource for learning data structures & algorithms and their implementation in any programming language with flowchart.`}
          />
          <meta
            property="og:image"
            content={algorithmshub}
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bunlongvan" />
          <meta name="twitter:creator" content="@bunlongvan" />
          <meta name="twitter:title" content={`${doc.name} | AlgorithmsHub`} />
          <meta
            name="twitter:description"
            content={`${doc.name} | Open-source resource for learning data structures & algorithms and their implementation in any programming language with flowchart.`}
          />
          <meta
            name="twitter:image"
            content={algorithmshub}
          />
        </Helmet>
        <Topbar />
        <Wrapper>
          {!isAtLeastDesktop && (
            <Sidebar menu={menuParent} pathname={pathname} mobile />
          )}
          {fullpage ? (
            <Fragment>{children}</Fragment>
          ) : (
            <Container>
              {isAtLeastDesktop && showSidebar && (
                <Sidebar menu={menuParent} pathname={pathname} />
              )}
              <Document>{children}</Document>
            </Container>
          )}
        </Wrapper>
      </HelmetProvider>
    </React.Fragment>
  )
}
