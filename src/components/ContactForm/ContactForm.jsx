import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ArgentinaPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]d)(?:(?=d{0,2}15)d{2})??d{8}$/;

const ContactForm = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contactar anunciante</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresá tus datos para que el anunciante pueda contactarte
          </DialogContentText>
          <ValidatorForm onSubmit={props.onSubmit} autoComplete="off">
			<TextValidator
				label="Nombre"
				onChange={props.onFieldChange}
				name="nombre"
				value={props.formFields.nombre}
				validators={['required']}
				errorMessages={['Campo obligatorio, por favor ingresá tu nombre']}
				fullWidth
				margin="dense"
			/>
			<TextValidator
				label="Teléfono"
				onChange={props.onFieldChange}
				name="telefono"
				value={props.formFields.telefono}
				validators={['required', 'isNumber']}
				errorMessages={['Campo obligatorio', 'El teléfono es inválido, ej: 01144444444']}
				fullWidth
				margin="dense"
			/>
			<TextValidator
				label="Email"
				onChange={props.onFieldChange}
				name="email"
				value={props.formFields.email}
				validators={['required', 'isEmail']}
				errorMessages={['Campo obligatorio', 'El email es inválido']}
				fullWidth
				margin="dense"
			/>
            {/* <TextField
			  error
			  helperText='Por favor ingresá tu email'
              margin="dense"
              id="email"
              label="Email Address"
			  type="email"
			  onChange={props.onFieldChange}
              fullWidth
            /> */}
			<DialogActions>
			<Button type='submit' color="primary">
				Enviar
			</Button>
        </DialogActions>
          </ValidatorForm>
        </DialogContent>
        
      </Dialog>
    </>
  );
};

export default ContactForm;
