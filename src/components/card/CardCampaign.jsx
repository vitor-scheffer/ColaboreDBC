import moment from 'moment'
import 'moment/locale/pt-br'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from './Card'
import { CardContent, FinishedCampaign } from './CardCampaign.styled'
import capa from '../../imgs/capa.png'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage, ColorGreen, ColorRed, ColorOrange, TextColor } from '../../consts'

const CardCampaign = ({ campanha, isMyContributions, idUsuario }) => {
  // const [userDonors, setuserDonors] = useState();
  const navigate = useNavigate();

  const dateToFinished = new Date(campanha.dataLimite)
  const currentDate = new Date()
  const isFinished = currentDate > dateToFinished

  const isRed = campanha.arrecadacao < 0.3 * campanha.meta

  const isOrange = campanha.arrecadacao >= 0.3 * campanha.meta && campanha.arrecadacao <= 0.8 * campanha.meta

  const isGreen = campanha.arrecadacao > 0.8 * campanha.meta

  let userDonors = 0;

  campanha.doacoes.map(doacao => (doacao.idUsuario === idUsuario) ? userDonors = userDonors + doacao.valor : '')

  return (
    <Card maxWidth="100%" height='350px'>
      <CardContent>
        <img src={campanha.fotoCampanha ? campanha.fotoCampanha : capa} />
        <div>
          <Subtitle color={colorTittlePage}>{campanha.titulo}</Subtitle>
          <div>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(campanha.ultimaAlteracao).startOf('minute').fromNow()}</TextSm>
            <button id='verDetalhes' onClick={() => navigate(`/detalhe-campanha/${campanha.idCampanha}`)}>Ver detalhes</button>
          </div>
        </div>
        <div>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Por:</TextSm> {campanha.nome}
          </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Categoria:</TextSm> <div>{campanha.tags.map(tag => { return (<><span>{tag}</span></>) })}</div>
          </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Encerra em:</TextSm> {moment(campanha.dataLimite).format('LL')}
          </TextSm>
        </div>
        <footer>
          {isMyContributions ?
          <div>
            <Text>Você contribuiu</Text>
            <Text>{userDonors.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
          </div> :
          <div>
            <Text>Arrecadado</Text>
            <Text className={isRed ? 'ColorRed' : isOrange ? 'ColorOrange' : isGreen ? 'ColorGreen' : ''} >{campanha.arrecadacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
          </div>
          }
          <div></div>
          <div>
            <Text>Meta</Text>
            <Text>{campanha.meta.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
          </div>
        </footer>
        {(campanha.statusMeta === true || isFinished) && <div className="finished"><div><h3>{campanha.statusMeta ? 'Meta Atingida' : isFinished ? 'Campanha Finalizada' : ''}</h3></div></div>}
      </CardContent>
    </Card>
  )
}

export default CardCampaign