// importamos Title as TitleStyle (apelido) para evitar conflitos de nome com o componente Title.
import { Title as TitleStyle } from './styles'

//type para tipar as props do componente Title que é utilizado em demais lugares do projeto e receber uma string como children para ser exibida na tela através da tag span.
export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title
