import React from 'react'

import styles from '../../styles/Map.module.css'

function Map() {
  return (
    <>
        <iframe
            src="https://api.mapbox.com/styles/v1/pj-sama/cl4ua53gb001216s96umoot6i/draft.html?title=false&access_token=pk.eyJ1IjoicGotc2FtYSIsImEiOiJjbDR1OXluOHUwdHp2M2VtbHI4a3M0cWgyIn0._uSaAHuKTKvJ8AdevKrMxg&zoomwheel=false#5.16/54.364/-2.147"
            title="Streets"
            className={styles.map}          
          ></iframe>
    </>
  )
}

export default Map