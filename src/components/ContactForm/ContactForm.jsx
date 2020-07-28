import React from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//const ArgentinaPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]d)(?:(?=d{0,2}15)d{2})??d{8}$/;

const ContactForm = (props) => {
	let formContent = null;
	switch (props.formStatus) {
		case 'ready':
			formContent = (
				<>
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
				<DialogActions>
					<Button type='submit' color="primary">
						Enviar
					</Button>
				</DialogActions>
		  </ValidatorForm></>);
		  break;
		case 'success':
			formContent = 
			<DialogContentText>
            	Tus datos se han enviado con éxito! En breve serás contactado
          	</DialogContentText>;
			break;
		case 'duplicated':
			formContent = 
			<DialogContentText>
            	Ya habías cargado tu email anteriormente, pero descuida que pronto te contactarán!
          	</DialogContentText>;
			break;
		default:
			break;
	}
	
	return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contactar anunciante</DialogTitle>
        <DialogContent>
          {formContent}
        </DialogContent>
        
      </Dialog>
    </>
  );
};

export default ContactForm;
