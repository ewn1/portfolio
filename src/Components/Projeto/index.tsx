import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
