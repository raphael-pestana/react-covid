import React from 'react';

import TipsComponent from '../components/tips/tipComponent';
import './tips-style.scss'

const Tips = () => {
    return(
        <div>
            <div className="titleStyle">
                <h1> Health Tips </h1>
            </div>
            <div className="main-container">

            <TipsComponent
                title="Hands"
                image="https://www.ladoaladopelavida.org.br/portal/Principal/arquivos/listas/5175/capa.png" 
                content="Wash your hands frequently with soap and water or an alcohol gel solution.
                Why? Rubbing your hands helps to eliminate traces of the virus that may be present in places of common use."
            />

            <TipsComponent
                title="Elbow"
                image="http://www.uel.br/com/agenciaueldenoticias/fotos/23-3-2020-g-cotovelo2.jpg" 
                content="Covering your mouth and nose with a bent arm or a tissue or paper tissue when you cough and sneeze. Dispose or sanitize used material immediately.
                Why? Droplets of saliva and secretion are vectors of Covid-19. Preventing other people from coming into contact with contaminated saliva prevents not only the coronavirus, but a series of respiratory diseases."
                />

            <TipsComponent
                title="Face"
                image="https://conteudo.imguol.com.br/c/entretenimento/19/2020/03/08/bbc-coronavirus-tocar-o-rosto-4-1583671056166_v2_750x421.jpg"   
                content="Avoid touching your eyes, nose and mouth. These areas have direct contact with the bloodstream and are more sensitive to the presence of contamination agents.
                Why? The hands are in constant contact with surfaces that can be vectors of transmission of viruses and bacteria. Keeping them away from the mucous membranes decreases the chance of getting sick."
                />

            <TipsComponent
                title="Space"
                image="https://soledade.noticias.rs/wp-content/uploads/sites/5/2020/04/unnamed-1024x768.jpg"
                content="Keep at least one meter away from people who experience constant coughing or sneezing.
                Why? Coughing and sneezing spread small drops of secretion and saliva that can contain viruses. With proximity, the chance of breathing or having contact with these droplets increases."
                />

            <TipsComponent
                title="Home"
                image="https://pngimage.net/wp-content/uploads/2018/05/casa-animada-png-1.png"
                content="Staying at home is the best way to prevent Covid-19.
                Why? 
                It is the only way that exists today to attenuate the circulation of the virus. Transmission of the virus happens quickly, and the disease can trigger a severe respiratory syndrome."
                />

            <TipsComponent
                title="Mask"
                image="https://media-manager.noticiasaominuto.com/1920/1587137322/naom_5e99cad67b8f3.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyNTYwLCJjcm9wSGVpZ2h0IjoxNDQwLCJjcm9wWCI6MCwiY3JvcFkiOjExMn0sInBvcnRyYWl0Ijp7ImNyb3BXaWR0aCI6OTU1LCJjcm9wSGVpZ2h0IjoxNjk4LCJjcm9wWCI6MTAwNSwiY3JvcFkiOjh9fQ=="
                content="Healthy people without symptoms such as fever, cough or sneezing do not need to wear masks.
                Why? Only healthcare professionals and people who have symptoms similar to the new coronavirus need to wear masks. The function of the masks is to contain the spread of the virus in those who are already infected. WHO recommends the rational use of masks."
                />
            </div>
            

        </div>
    )
}


export default Tips;