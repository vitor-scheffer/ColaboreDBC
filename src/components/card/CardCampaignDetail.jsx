import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaignDetail.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const CardCampaignDetail = ({campanha, finishedByDate}) => {

  return (
    <Card maxWidth="100%" height="100%">
      <CardContent>
        <img src={campanha.fotoCampanha ? campanha.fotoCampanha : capa} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campanha.titulo}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(campanha.ultimaAlteracao).startOf('hour').fromNow()}</TextSm>
          </div>
        </div>
        <div>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Por:</TextSm>  {campanha.nome}
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Categoria:</TextSm> <div>{campanha.tags.map(tag => {return(<><span>{tag}</span></>)})}</div>
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Encerra em:</TextSm>  {moment(campanha.dataLimite).format('LL')}
            </TextSm>
        </div>
        <div>
          <div></div>
          <Text>Descrição:</Text>
          <p>
            {campanha.descricao} 
          </p>
        </div>
        {(campanha.statusMeta === true || finishedByDate) && <div className="finished"><div><h3>{campanha.statusMeta ? 'Meta Atingida' : finishedByDate ? 'Campanha Finalizada' : ''}</h3></div></div>}
      </CardContent>
    </Card>
  )
}

export default CardCampaignDetail