import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab
      laborum ratione quisquam ex, dolor nemo nam labore at, alias amet mollitia
      quae aliquam vitae expedita doloribus tempora omnis! Inventore?
    </Descricao>
  </Card>
)

export default Product
