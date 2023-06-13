import 'flatpickr/dist/themes/material_green.css';
import './styles.css';
import FlatPicker from 'react-flatpickr';
import flatpickerLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

flatpickerLib.localize(Portuguese);
function Filter() {
  const onChangeDate = (date: Date[]) => {
    console.log(date);
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd-m-Y',
          showMonths: 2
        }}
        placeholder="Selecione um período"
        className="filter-input"
        onChange={onChangeDate}
      />
      <select name="" id="" className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FAME">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
