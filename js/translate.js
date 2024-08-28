function translate(language) {
    if (language === 'pr') {
        $(".ridetext").text("Passeios");
        $(".eventtext").text("Evento");
        $(".tickettext").text("Bilhete");
        $(".infotext").text("Informações do parque");
        $(".hometext").text("Lar");
        var newHeading = $("<h2>").addClass("heading").text("Descrição do contêiner de apresentação de slides atual");
        $(".heading").replaceWith(newHeading);
        $(".activities").text("Atividades para fazer");
        $(".activityName1").text("Nome da atividade");
        $(".activityName2").text("Nome da atividade");
        $(".activityName3").text("Nome da atividade");
        $(".activityBox b").text("Detalhes");
        $(".bookButton").text("Reservar agora!");
        $("a[id='aContactInfo']").text("Informações de Contato");
        $("a[id='aFaq']").text("Perguntas Frequentes");
        $("a[id='aRefund']").text("Política de Reembolso");
        $("a[href='#hotweelsstore']").text("Loja Hot Wheels");
        $("a[id='aCookies']").text("Cookies");
        $("a[id='aTermsAndConditions']").text("Termos e Condicoes");
        $("a[id='aCopyright']").text("Direitos Autorais");
        $(".centeredDiv a").each(function(index) {
            // Depending on the index, set different text content for each <a> element
            switch(index) {
                case 0:
                    $(this).text("Eventos");
                    break;
                case 1:
                    $(this).text("Ingressos");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox h3 ").each(function(index) {
            // Depending on the index, set different text content for each <a> element
            switch(index) {
                case 0:
                    $(this).text("Exposição de colecionadores");
                    break;
                case 1:
                    $(this).text("Nova faixa quente");
                    break;
                    case 2:
                    $(this).text("Ande em um moinho gêmeo");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox h5 ").each(function(index) {
            // Depending on the index, set different text content for each <a> element
            switch(index) {
                case 0:
                    $(this).text("14 de junho de 2024");
                    break;
                case 1:
                    $(this).text("18 de julho de 2024");
                    break;
                    case 2:
                    $(this).text("24 de julho de 2024");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox p ").each(function(index) {
            // Depending on the index, set different text content for each <a> element
            switch(index) {
                case 0:
                    $(this).text("Experimente esta incrível exibição de carros colecionáveis ​​do passado...");
                    break;
                case 1:
                    $(this).text("Temos um novo carregamento de passeio. Venha experimentar a vida na pista quente como se você fosse um verdadeiro piloto de Hot Wheels!");
                    break;
                    case 2:
                    $(this).text("A partir de 24 de julho de 2024, você poderá andar em um Hot Wheels Twin Mill em tamanho real!");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox a ").text("Agende agora");
        $(".upcomingEvents a ").text("Próximos eventos...");
        $(".ticketBox h3 ").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Passe de um dia");
                    break;
                case 1:
                    $(this).text("Passe VIP");
                    break;
                case 2:
                    $(this).text("Espectador");
                    break;
            }
        });
        $(".ticketBox h5 ").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("US$ 15,99");
                    break;
                case 1:
                    $(this).text("US$ 25,99");
                    break;
                case 2:
                    $(this).text("US$ 5,99");
                    break;
            }
        });
        $(".ticketBox p ").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Acesso ilimitado a passeios durante um dia inteiro");
                    break;
                case 1:
                    $(this).text("Acesso ilimitado a passeios durante um dia inteiro com estacionamento e vale-refeição");
                    break;
                case 2:
                    $(this).text("Traga sua família e pague por viagem.");
                    break;
            }
        });
        $(".ticketBox a").text("Comprar"); 
        $(".advetisementBanner a").text("Anuncie aqui...");
        $(".logintext").text("CONECTE-SE");
        $(".usernametext").text("Nome de usuário");
        $(".emailtext").text("E-mail");
        $(".passwordtext").text("Senha");
        $(".remembermetext").text("Lembre de Mim");
        $(".forgotpasswordtext").text("Esqueceu sua senha? ");
        $(".loginbtntext").text("Conecte-se");
        $(".donthaveanaccounttext").text("Não tem uma conta?");
        $(".registertext").text("Registro");
        $(".registrationtext").text("CADASTRO");
        $(".agreetermsandconditionstext").text("Eu concordo com os Termos e Condições");
        $(".alreadyhaveanaccounttext").text("já tem uma conta?");
    } else if (language === 'es') {
        $(".ridetext").text("Atracciones");
        $(".eventtext").text("Evento");
        $(".tickettext").text("Entrada");
        $(".infotext").text("Información del Parque");
        $(".hometext").text("Inicio");
        var newHeading = $("<h2>").addClass("heading").text("Descripción del contenedor de presentación de diapositivas actual");
        $(".heading").replaceWith(newHeading);
        $(".activities").text("Actividades para hacer");
        $(".activityName1").text("Nombre de la Actividad");
        $(".activityName2").text("Nombre de la Actividad");
        $(".activityName3").text("Nombre de la Actividad");
        $(".activityBox b").text("Detalles");
        $(".bookButton").text("¡Reservar Ahora!");
        $("a[id='aContactInfo']").text("Información de Contacto");
        $("a[id='aFaq']").text("Preguntas Frecuentes");
        $("a[id='aRefund']").text("Política de Reembolso");
        $("a[href='#hotweelsstore']").text("Tienda Hot Wheels");
        $("a[id='aCookies']").text("Cookies");
        $("a[id='aTermsAndConditions']").text("Términos y Condiciones");
        $("a[id='aCopyright']").text("Derechos de Autor");
        $(".centeredDiv a").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Eventos");
                    break;
                case 1:
                    $(this).text("Entradas");
                    break;
            }
        });
        $(".activityBox h3 ").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Exhibición de Coleccionistas");
                    break;
                case 1:
                    $(this).text("Nueva Pista Hot");
                    break;
                case 2:
                    $(this).text("Monta un Twin Mill");
                    break;
            }
        });
        $(".activityBox h4").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Experimenta esta increíble exhibición de coches de colección del pasado...");
                    break;
                case 1:
                    $(this).text("Tenemos un nuevo envío de atracciones. ¡Ven y experimenta la vida en la pista caliente como si fueras un verdadero corredor de Hot Wheels!");
                    break;
                case 2:
                    $(this).text("A partir del 24 de julio de 2024, ¡podrás montar en un Twin Mill de Hot Wheels a tamaño real!");
                    break;
            }
        });
        $(".activityBox h5").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("14 de junio de 2024");
                    break;
                case 1:
                    $(this).text("18 de julio de 2024");
                    break;
                case 2:
                    $(this).text("24 de julio de 2024");
                    break;
            }
        });
        $(".activityBox p").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Experimenta esta increíble exhibición de coches de colección del pasado...");
                    break;
                case 1:
                    $(this).text("Tenemos un nuevo envío de atracciones. ¡Ven y experimenta la vida en la pista caliente como si fueras un verdadero corredor de Hot Wheels!");
                    break;
                case 2:
                    $(this).text("A partir del 24 de julio de 2024, ¡podrás montar en un Twin Mill de Hot Wheels a tamaño real!");
                    break;
            }
        });
        $(".activityBox a").text("Programar ahora");
        $(".upcomingEvents a").text("Próximos eventos...");
        $(".ticketBox h3").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Pase de un día");
                    break;
                case 1:
                    $(this).text("Pase VIP");
                    break;
                case 2:
                    $(this).text("Espectador");
                    break;
            }
        });
        $(".ticketBox h5").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("$15.99");
                    break;
                case 1:
                    $(this).text("$25.99");
                    break;
                case 2:
                    $(this).text("$5.99");
                    break;
            }
        });
        $(".ticketBox p").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Acceso ilimitado a atracciones durante todo el día");
                    break;
                case 1:
                    $(this).text("Acceso ilimitado a atracciones durante todo el día, incluido estacionamiento y vale de comida");
                    break;
                case 2:
                    $(this).text("Traiga a su familia y pague por atracción.");
                    break;
            }
        });
        $(".ticketBox a").text("Comprar ahora"); 
        $(".advetisementBanner a").text(" Publicitar aquí... ");
        $(".logintext").text("ACCESO");
        $(".usernametext").text("Nombre de usuario");
        $(".emailtext").text("Correo Electrónico");
        $(".passwordtext").text("Contraseña");
        $(".remembermetext").text("Acuérdate de Mí");
        $(".forgotpasswordtext").text("¿Has olvidado tu contraseña? ");
        $(".loginbtntext").text("Acceso");
        $(".donthaveanaccounttext").text("¿No tienes una cuenta?");
        $(".registertext").text("Registro");
        $(".registrationtext").text("REGISTRO");
        $(".agreetermsandconditionstext").text("Estoy de acuerdo con los términos y condiciones");
        $(".alreadyhaveanaccounttext").text("¿Ya tienes una cuenta?");
    } else {
        $(".ridetext").text("Rides");
        $(".eventtext").text("Events");
        $(".tickettext").text("Tickets");
        $(".infotext").text("Park Information");
        $(".hometext").text("Home");
        var newHeading = $("<h2>").addClass("heading").text("Description of the current slideshow container");
        $(".heading").replaceWith(newHeading);
        $(".activities").text("Activities");
        $(".activityName1").text("Activity Name");
        $(".activityName2").text("Activity Name");
        $(".activityName3").text("Activity Name");
        $(".activityBox b").text("Details");
        $(".bookButton").text("Book Now!");
        $("a[id='aContactInfo']").text("Contact Information");
        $("a[id='aFaq']").text("FAQs");
        $("a[id='aRefund']").text("Refund Policy");
        $("a[href='#hotweelsstore']").text("Hot Wheels Store");
        $("a[id='aCookies']").text("Cookies");
        $("a[id='aTermsAndConditions']").text("Terms and Conditions");
        $("a[id='aCopyright']").text("Copyright");
        $(".centeredDiv a").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Events");
                    break;
                case 1:
                    $(this).text("Tickets");
                    break;
            }
        });
        $(".activityBox h3 ").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Collector's Exhibition");
                    break;
                case 1:
                    $(this).text("New Hot Track");
                    break;
                case 2:
                    $(this).text("Ride a Twin Mill");
                    break;
            }
        });
        $(".activityBox h4").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Experience this amazing display of collectible cars from the past...");
                    break;
                case 1:
                    $(this).text("We have a new shipment of rides. Come experience life on the hot track as if you were a true Hot Wheels racer!");
                    break;
                case 2:
                    $(this).text("Starting from July 24, 2024, you'll be able to ride in a life-size Hot Wheels Twin Mill!");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox h5").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("June 14, 2024");
                    break;
                case 1:
                    $(this).text("July 18, 2024");
                    break;
                case 2:
                    $(this).text("July 24, 2024");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox p").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Experience this incredible display of collectible cars from the past...");
                    break;
                case 1:
                    $(this).text("We have a new shipment of rides. Come experience life on the hot track as if you were a true Hot Wheels racer!");
                    break;
                case 2:
                    $(this).text("Starting from July 24, 2024, you'll be able to ride in a life-size Hot Wheels Twin Mill!");
                    break;
                // Add more cases for additional <a> elements if needed
            }
        });
        $(".activityBox a").text("Schedule now");
        $(".upcomingEvents a").text("Upcoming events...");
        $(".ticketBox h3").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("One-day Pass");
                    break;
                case 1:
                    $(this).text("VIP Pass");
                    break;
                case 2:
                    $(this).text("Spectator");
                    break;
            }
        });
        $(".ticketBox h5").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("$15.99");
                    break;
                case 1:
                    $(this).text("$25.99");
                    break;
                case 2:
                    $(this).text("$5.99");
                    break;
            }
        });
        $(".ticketBox p").each(function(index) {
            switch(index) {
                case 0:
                    $(this).text("Unlimited access to rides for a whole day");
                    break;
                case 1:
                    $(this).text("Unlimited access to rides for a whole day including parking and meal voucher");
                    break;
                case 2:
                    $(this).text("Bring your family and pay per ride.");
                    break;
            }
        });
        $(".ticketBox a").text("Buy now"); 
        $(".advetisementBanner a").text("  Advertise Here...");
        $(".logintext").text("LOGIN");
        $(".usernametext").text("Username");
        $(".emailtext").text("Email");
        $(".passwordtext").text("Password");
        $(".remembermetext").text("Remember Me");
        $(".forgotpasswordtext").text("Forgot Password? ");
        $(".loginbtntext").text("Login");
        $(".donthaveanaccounttext").text("Don't have an account?");
        $(".registertext").text("Register");
        $(".registrationtext").text("REGISTRATION");
        $(".agreetermsandconditionstext").text("I agree to the terms and condititons");
        $(".alreadyhaveanaccounttext").text("Already have an account?");
    }
}
