import React from 'react'
import ViewHead from './View case section/viewHead'
import FigTree from './View case section/FigTree'
import Color from './View case section/Color'
import Icons from './View case section/Icons'
import Dispaly from './View case section/Dispaly'
import DiscoverVeiw from './View case section/DiscoverVeiw'
import ViewFoot from './View case section/ViewFoot'
function ViewCase() {
  return (
    <div className='view-case'>
        <ViewHead/>
        <FigTree />
        <Color/>
        <Icons/>
        <Dispaly />
        <DiscoverVeiw />
        <ViewFoot />
    </div>
  )
}

export default ViewCase