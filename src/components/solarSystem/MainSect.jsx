import React from 'react'
import Indepth from './Indepth'
import OverviewSect from './OverviewSect'
import Summary from './Summary'
import { AnimatePresence } from 'framer-motion'

const MainSect = ({ data, navOption, factor }) => {
    return (
        <section className='systemMainSect'>
            <AnimatePresence mode='wait'>
                {
                    navOption === "overview" && (
                        <OverviewSect data={data?.overview}/>
                    )
                }
                {
                    navOption === "indepth" && (
                        <Indepth data={data?.inDepth} factor={factor}/>
                    )
                }
                {
                    navOption === "summary" && (
                        <Summary data={data?.summary}/>
                    )
                }
            </AnimatePresence>


        </section>
    )
}

export default MainSect
