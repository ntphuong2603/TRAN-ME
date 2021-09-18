import React from 'react'
import ShowCameraComp from '../other_components/showCamera_comp'

export default function ShowCamera(props) {
  return(
    <ShowCameraComp {...props} title={'Scan QR'} text={'Hold your device to scan the QR code'}/>
  )
}