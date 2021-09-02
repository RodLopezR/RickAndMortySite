import { FunctionComponent, useEffect, useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Styles from './FormView.module.scss';
import { Card } from '@material-ui/core';

interface FormViewProps {
  disabled: boolean;
  onChangeForm: (name: string, state: string) => void;
}

const StatusList = [
  { name: 'Todos', value: 0, search: '' },
  { name: 'Vivo', value: 1, search: 'alive' },
  { name: 'Muerto', value: 2, search: 'dead' },
  { name: 'Desconocido', value: 3, search: 'unknown' },
];

const FormView: FunctionComponent<FormViewProps> = ({
  disabled,
  onChangeForm,
}) => {
  const [state, setState] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const actualizarDatos = () => {
    const strinState = StatusList.find((item) => item.value === state)?.search;
    onChangeForm(text, strinState || '');
  };

  useEffect(() => {
    if (text !== '') return;
    actualizarDatos();
  }, [text]);

  useEffect(() => {
    actualizarDatos();
  }, [state]);

  const handleClickClear = () => {
    setText('');
    setState(0);
  };
  const handleChange = (value: any) => setText(value.target.value);
  const handleChangeSelect = (value: any) => setState(value.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    actualizarDatos();
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.wrapper}>
      <Card className={Styles.card}>
        <Grid container>
          <Grid item xs={12}>
            <div className={Styles.title}>Buscador</div>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={2}></Grid>
          <Grid
            item
            xs={7}
            sm={7}
            md={5}
            lg={4}
            className={Styles.input__wrapper}
          >
            <TextField
              id="input-buscador"
              label="Buscador"
              variant="outlined"
              value={text}
              onChange={handleChange}
              disabled={disabled}
              autoComplete="off"
              color="secondary"
              fullWidth
            />
            <Fab
              color="secondary"
              aria-label="add"
              className={Styles.input__clearbutton}
              onClick={handleClickClear}
            >
              <HighlightOffIcon />
            </Fab>
          </Grid>
          <Grid item xs={3} sm={3} lg={2} className={Styles.select__wrapper}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="select-state-label" color="secondary">
                Condición
              </InputLabel>
              <Select
                labelId="select-state-label"
                id="select-state"
                value={state}
                onChange={handleChangeSelect}
                label="Condición"
                color="secondary"
                disabled={disabled}
              >
                {StatusList.map((status, indexStatus) => (
                  <MenuItem key={indexStatus} value={status.value}>
                    {status.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} lg={2} className={Styles.button__wrapper}>
            <Button
              className={Styles.button}
              type="submit"
              variant="contained"
              disabled={disabled}
              color="secondary"
              fullWidth
            >
              <SearchIcon />
              <Hidden only={['xs']}>Buscar</Hidden>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </form>
  );
};

export default FormView;
