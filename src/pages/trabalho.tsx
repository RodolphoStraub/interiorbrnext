import React from 'react'
import { Carousel} from 'antd';
import { cozinhalistData } from '@/Data/Data';
import CozinhaList from '@/Data/CozinhaList';
import QuartoList from '@/Data/QuartoList'
import SalaList from '@/Data/SalaList';
import BanheiroList from '@/Data/BanheiroList';

type Props = {}

const trabalho = (props: Props) => {
  return (
    <div className='trabalhoall'>
      <div className="trabalho1">
        <h1>Cozinhas</h1>
        <CozinhaList/>
      </div>
      <div className="trabalho2">
        <h1>Quartos</h1>
        <QuartoList/>
      </div>
      <div className="trabalho3">
        <h1>Salas</h1>
        <SalaList/>
      </div>
      <div className="trabalho4">
        <h1>Banheiros</h1>
        <BanheiroList/>
      </div>
    </div>
  )
}

export default trabalho