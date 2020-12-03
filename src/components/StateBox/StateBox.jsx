import * as S from './StateBox-Style.js';
import states from '../../_data/states.json'

const StateBox = ({data, updateStateData, updateHeader}) => {

  const stateClicked = (id, name) => {
    updateStateData(id);
    updateHeader(name)
  }

  return (
    <S.Container>
      <S.Header> State Report </S.Header>
      <S.StateScroller>
        { data != null &&
          states.map((val, idx) => {
            return (
              <S.State key={idx} onClick={() => {
                stateClicked(val.short, val.id);
              }}>
                <S.StateIcon src={val.image} alt="flag" />
                <S.StateName>{val.id}</S.StateName>
                <S.Cases>{data[idx].total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</S.Cases>
              </S.State>
            )
          })
        }
      </S.StateScroller>
    </S.Container>
  )
}

export default StateBox
