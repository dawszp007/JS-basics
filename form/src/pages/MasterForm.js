import React from 'react';
import { useFormik } from 'formik';
import { Link  } from 'react-router-dom';
import * as yup from 'yup';
import './style/Home.css';
import InputMask from 'react-input-mask'

//materialui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

//images
import wzor1 from '../assets/wzor1.PNG';
import wzor2 from '../assets/wzor2.PNG';
import wzor3 from '../assets/wzor3.PNG';
import wzor4 from '../assets/wzor4.PNG';



//validation
const validationSchema = yup.object({
  email: yup
    .string('Wprowadź email')
    .email('Wprowadzono niepoprawny email')
    .required('Email jest wymagany'),
  name: yup
    .string("Wprowadź swoję imie")
    .required('Imię jest wymagane')
    .matches(
      /^[A-Z].*$/,
      "Wprowadź imię z dużej litery"
    )
  ,
  surname: yup
    .string("Wprowadź swoję nazwisko")
    .required('Nazwisko jest wymagane')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwisko z dużej litery"
    )
  ,
  phone: yup
    .string("Wprowadź numer telefonu")
    .required('Numer telefonu jest wymagany')
    .matches(
      /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})*$/,
      'Zły numer telefonu'
    ),
  city: yup
    .string("Wprowadź nazwę miasta")
    .required('Nazwa miasta jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę miasta z dużej litery"
    )
  ,
  country: yup
    .string("Wprowadź nazwę kraju")
    .required('Nazwa kraju jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę kraju z dużej litery"
    )
  ,
  province: yup
    .string("Wprowadź nazwę województwa")
    .required('Nazwa województwa jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę województwa z dużej litery"
    )
  ,
  postalCode: yup
    .string("Wprowadź kod pocztowy")
    .required('Kod pocztowy jest wymagany')
    .matches(
      /^\(?([0-9]{2})\)?([-]?)([0-9]{3})*$/,
      'Zły kod pocztowy'
    ),
    idCard: yup
    .string("Wprowadź nr dowodu")
    .required('Nr dowodu jest wymagany')
    .matches(
      /^\(?([A-Z]{3})\)?([ ]?)([0-9]{6})*$/,
      'Zły numer dowodu osobistego'
    ),
});

//slider text
function sliderText(value) {
  return `${value}km`;
}

//styles
const inputStyle = {
  style: {
    fontSize: 22,
    color: 'white',
    shrink: true,
  }
}

const inputLabelStyle = {
  floatingLabelFocusStyle: {
    fontSize: 400,
  }
}

//default values
const values = {
  defaultDateValue: "1998-08-05"
};


const MasterForm = (props) => {
  //json data
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthday: '',
      email: '',
      phone: '',
      country: '',
      province: '',
      city: '',
      postalCode: '',
      idCard: '',
      radio: '',
      checkbox: [],
      sliderCentre: 5,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
      formik.push('/result');
      values.preventDefault();
      values.push('/result')
      window.location.href = '/result'
    },
  });

  //main form
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
      <form onSubmit={formik.handleSubmit}>
        <Box p={3} display="block">
        <Box display="flex" justifyContent="center">
          <Typography variant='h3'>
            Dane osobowe
        </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Imię"
              placeholder="Daw"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="surname"
              name="surname"
              label="Nazwisko"
              placeholder="Szpunar"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField
            id="date"
            label="Data urodzenia"
            type="date"
            name="birthday"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            InputProps={inputStyle}
            InputLabelProps={inputLabelStyle}
            defaultValue={values.defaultDateValue}
          />
        </Box>
        
        <Box p={3} display="flex" flexDirection="row" justifyContent="start">
          <FormControl component="fieldset">
            <FormLabel component="legend"> <h2> Wybierz płeć </h2> </FormLabel>
            <RadioGroup aria-label="Plec" name="radio" value={formik.values.radio} onChange={formik.handleChange} onBlur={formik.handleBlur} row-2>
              <Box>
              <FormControlLabel value="Kobieta" control={<Radio />} label={
                    <p>Kobieta</p>
                } />
              <FormControlLabel value="Mężczyzna" control={<Radio />} label={
                    <p>Mężczyzna</p>
                } />
                
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
        
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Kraj"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="province"
              name="province"
              label="Województwo"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.province}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.province && Boolean(formik.errors.province)}
              helperText={formik.touched.province && formik.errors.province}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="Miasto"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Box>
          <Box p={3}>
            <InputMask
              mask="99-999"
              value={formik.values.postalCode}
              disabled={false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maskChar=""
            >
              {() => <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Kod pocztowy"
                InputProps={inputStyle}
                InputLabelProps={inputLabelStyle}
                value={formik.values.postalCode}
                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                helperText={formik.touched.postalCode && formik.errors.postalCode}
              />}
            </InputMask>
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="idCard"
              name="idCard"
              label="Nr dowodu"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.idCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.idCard && Boolean(formik.errors.idCard)}
              helperText={formik.touched.idCard && formik.errors.idCard}
            />
            </Box>
        </Box>
        <Box p={3}>
          <InputMask
            mask="999-999-999"
            value={formik.values.phone}
            disabled={false}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maskChar=""
          >
            {() => <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Telefon"
              InputProps={{
                startAdornment: <InputAdornment position="start"><PhoneIcon />+48</InputAdornment>,
                style: {
                  fontSize: 22,
                  color: 'white',
                  shrink: true,
                }
              }}
              InputLabelProps={inputLabelStyle}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />}
          </InputMask>
        </Box>
        <Box p={3}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            InputProps={inputStyle}
            InputLabelProps={inputLabelStyle}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        
        
        <Box p={3} display="flex" flexDirection="column" justifyContent="center">
          <FormLabel component="legend"> <h2> Ulubiony wzór </h2> </FormLabel>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Zaznacz dwa ulubione wzory</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="Pitagoras" onChange={formik.handleChange} onBlur={formik.handleBlur} name="checkbox" />}
                label={
                  <>
                    <div className="checkDiv">
                      <img src={wzor1} className="checkImg" alt="wzor1" style={{ margin: "5px" }} />
                    </div>
                  </>
                }
              />
              <FormControlLabel
                control={<Checkbox value="Euler" onChange={formik.handleChange} onBlur={formik.handleBlur} name="checkbox" />}
                label={
                  <>
                    <div className="checkDiv">
                      <img src={wzor2} className="checkImg" alt="wzor2" style={{ margin: "5px" }} />
                    </div>
                  </>
                }
              />
              <FormControlLabel
                control={<Checkbox value="Einstein" onChange={formik.handleChange} onBlur={formik.handleBlur} name="checkbox" />}
                label={
                  <>
                    <div className="checkDiv">
                      <img src={wzor3} className="checkImg" alt="wzor3" style={{ margin: "5px" }} />
                    </div>
                  </>
                }
              />
              <FormControlLabel
                control={<Checkbox value="całka" onChange={formik.handleChange} onBlur={formik.handleBlur} name="checkbox" />}
                label={
                  <>
                    <div className="checkDiv">
                      <img src={wzor4} className="checkImg" alt="wzor4" style={{ margin: "5px" }} />
                    </div>
                  </>
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box p={3} display="flex" flexDirection="column" justifyContent="center">
          <FormLabel component="legend"> <h2> Nr semestru - studia inżynierskie + magisterskie</h2> </FormLabel>
          <Slider
            defaultValue={5}
            getAriaValueText={sliderText}
            step={1}
            marks
            min={1}
            max={10}
            name="sliderCentre"
            valueLabelDisplay="auto"
            onChange={formik.setFieldValue && formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        
        <Box p={1}>
              <Link 
              type="submit"
              to={{
                pathname: "/result",
                props: formik
              }}> 
                <Button color="primary" variant="contained" fullWidth type="submit"> 
                  Click
                </Button>
              </Link>
        </Box>
        </Box>
      </form>
      </Grid>
    </React.Fragment>
  );
};


export default MasterForm;
