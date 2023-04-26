import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'

const index = () => {

  return (
    <>
      <Head>
        <title>Montecristi Group SAC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="Montecristi Group"
        />
        <meta
          name="description"
          content="montecristi, montecristi group, montecristi holding"
        />
      </Head>
      <Home />
    </>
  )
}

export default index
