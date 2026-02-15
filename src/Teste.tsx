import styled from 'styled-components'

//BotaoProps é o tipo que armazena o componente chamado "principal", ele é utilizado no lugar das classes css.
type BotaoProps = {
  principal: boolean
  fontSize?: string
}

//Aqui criamos a const Botao que utiliza o styled em um button HTML com a const BotaoProps para declarar a utilização do componente chamado "principal".
//aqui na template string dizemos que a props.principal, se for true é verde, se não for, é azul.
//no fontSize, se ele tiver o tamanho declarado na tag, vai usar o valor declarado lá. Se não tiver, ele utiliza o padrão estabelecido dentro do templateString pelo type || '16px'
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

//Aqui abaixo criamos um componente dentro de outro componente, mesmo o BotaoPerigo ter o componente "principal" sua cor se tornou conforme escrito dentro do seu bloco, como o efeito "herança".
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      {/* Aqui digitamos principal={false} para que ele assuma a cor azul conforme dito acima */}
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      {/* Se utilizar a propriedade as="a", mesmo tendo criado o elemento como button, ele se transforma em uma tag "a" (link) */}
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
