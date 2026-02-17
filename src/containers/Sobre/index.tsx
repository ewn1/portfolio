import Title from '../../Components/Title'
import Paragrafo from '../../Components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A perferendis
      minima esse modi assumenda, odit dicta voluptates optio nobis nihil
      obcaecati unde fugit? Molestiae impedit sapiente, possimus assumenda rerum
      ea?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-fast.vercel.app/api?username=ewn1&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=ewn1&show_icons=true&theme=dracula&layout=donut" />
    </GithubSecao>
  </section>
)

export default Sobre
