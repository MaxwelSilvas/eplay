import Section from '../Section'

import { Items, Item } from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
