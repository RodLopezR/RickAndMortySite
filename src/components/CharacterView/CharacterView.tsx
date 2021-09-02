import { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';

import CharacterType from '../../types/Character';
import Styles from './CharacterView.module.scss';
import clsx from 'clsx';

interface CharacterViewProps {
  character: CharacterType;
}

const CharacterView: FunctionComponent<CharacterViewProps> = ({
  character,
}) => {
  return (
    <Card className={Styles.item__container}>
      <div className={Styles.img__wrapper}>
        <img className={Styles.img} src={character.image} alt="character" />
        <div className={Styles.shadow} />
        <div className={Styles.name}>{character.name}</div>
      </div>
      <div className={Styles.status}>
        <div
          className={clsx(
            Styles.status_circle,
            character.status === 'Dead' ? Styles.dead : '',
            character.status === 'unknown' ? Styles.unknown : ''
          )}
        />
        {character.status}
      </div>
      <div className={Styles.metadata}>
        <div>
          <strong>Origen:</strong> {character.origin.name}
        </div>
        <div>
          <strong>Ubicación:</strong> {character.location.name}
        </div>
        <div>
          <strong>Especie:</strong> {character.species}
        </div>
        <div>
          <strong>Geneno:</strong> {character.gender}
        </div>
        <div>
          <strong>Tipo:</strong> {character.type || '-'}
        </div>
      </div>
      <div className={Styles.container__shadow} />
    </Card>
  );
};

export default CharacterView;
