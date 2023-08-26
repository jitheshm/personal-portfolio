import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" />
        </div>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
