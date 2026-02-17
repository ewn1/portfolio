// importamos Title as TitleStyle (apelido) para evitar conflitos de nome com o componente Title.
import { P } from './styles'

//type para tipar as props do componente Title que é utilizado em demais lugares do projeto e receber uma string como children para ser exibida na tela através da tag span.
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
