import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'
import './visualizer-page.component.css' 

const Visualizer = ()=>{
    return(
        <div className="container">
            <iframe src="https://estudusfqedu-my.sharepoint.com/personal/aduque_alumni_usfq_edu_ec/_layouts/15/Doc.aspx?sourcedoc={4c494724-c10b-4c3e-b940-67c9e11b3b7c}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="610px" height="367px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
        </div>
        )
}

export default Visualizer