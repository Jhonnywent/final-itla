function validateForm()
{
	if(document.getElementById('txtname').value=='')
	{
		
		document.getElementById('noname').innerHTML='Debe escribir su nombre';
		document.getElementById('txtname').focus()
		return false
	}

		else if(document.getElementById('txtname').value!='')
		{
			document.getElementById('noname').innerHTML='';
		}

	if(document.getElementById('txtlastname').value=='')
	{
		
		document.getElementById('NoLastname').innerHTML='Debe escribir su apellido';
		document.getElementById('txtlastname').focus()
		return false
	}

		else if(document.getElementById('txtlastname').value!='')
		{
			document.getElementById('NoLastname').innerHTML='';
		}
	
	if(document.getElementById('txtCorreo').value=='')
	{
		
		document.getElementById('NoMail').innerHTML='Debe escribir su correo';
		document.getElementById('txtCorreo').focus()
		return false
	}

		else if(document.getElementById('txtCorreo').value!='')
		{
			document.getElementById('NoMail').innerHTML='';
		}

	if(document.getElementById('txtUsuario').value=='')
	{
		
		document.getElementById('NoUser').innerHTML='Debe escoger un usuario';
		document.getElementById('txtUsuario').focus()
		return false
	}

		else if(document.getElementById('txtUsuario').value!='')
		{
			document.getElementById('NoUser').innerHTML='';
		}

	if(document.getElementById('txtClave').value=='')
	{
		
		document.getElementById('NoPassword').innerHTML='Debe escoger una contrase&#241;a';
		document.getElementById('txtClave').focus()
		return false
	}

		else if(document.getElementById('txtClave').value!='')
		{
			document.getElementById('NoPassword').innerHTML='';
		}

	if(document.getElementById('txtNombre').value!='' && document.getElementById('txtApellido').value!='' && document.getElementById('txtCorreo').value!='' && document.getElementById('txtUsuario').value!='' && document.getElementById('txtClave').value!='')
	{
		document.getElementById('RegistroExitoso').innerHTML='Registro Exitoso';
	}

}