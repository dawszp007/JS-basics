import React from 'react';
import Grid from '@material-ui/core/Grid';

function results(props) {
    const checkbox = props.location.props.values.checkbox
    return (
        <React.Fragment>
        <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
  >
        <form>
        Twoje dane osobowe:  <br />
        Imie: {props.location.props.values.name} <br />
        Nazwisko: {props.location.props.values.surname} <br />
        Data urodzin: {props.location.props.values.birthday} <br />
        Kraj: {props.location.props.values.country} <br />
        Województwo: {props.location.props.values.province} <br />
        Miasto: {props.location.props.values.city} <br />
        Płeć: {props.location.props.values.radio} <br />
        Kod pocztowy: {props.location.props.values.postalCode} <br />
        Numer dowodu: {props.location.props.values.idCard} <br />
        <hr>
        </hr>
        Twoje dane kontatkowe:  <br />
        email: {props.location.props.values.email} <br />
        nr telefonu: {props.location.props.values.phone} <br />
        <hr>
        </hr>
        <h3> Dante dotyczące pobytu </h3>
        <hr>
        </hr>
        <br />

        { checkbox.length > 0 ? "Twoje ulubione wzory: " + checkbox.map(item => (
        item
      )) : "Brak wybranych posiłków"} <br />
        Numer semestru: {props.location.props.values.sliderCentre} <br />
        

        </form>
        </Grid>
        </React.Fragment>
    )
}

export default results;