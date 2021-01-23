import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const Visualizer = ()=>{
    return(
        <div>
            <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                //url: 'https://drive.google.com/file/d/1gU9BgKbZuW7qy2wyqt3FtPITrYGg0_TI/view?usp=sharing'
            }}
        />
        </div>
    )
}

export default Visualizer