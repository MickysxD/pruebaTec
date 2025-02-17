import swal from 'sweetalert2';

// Simple Alert
export function basicAlert() {
    swal.fire("Here's a message!");
}

// Alert with Title
export function withTitle() {
    swal.fire("Here's a message!", "It's pretty, isn't it?");
}

//  HTML Alert
export function htmlAlert() {
    swal.fire({
        title: 'HTML <small>Title</small>!',
        html: 'A custom <span style="color:#F6BB42">html<span> message.'
    });
}

// Question Type Alert
export function typeQuestion() {
    swal.fire("Question", "Are You Sure?", "question");
}

// Success Type Alert
export function typeSuccess() {
    swal.fire("Good job!", "You clicked the button!", "success");
}

// Alerta success modificada
export function alertaSuccess(titulo: string, mensaje: string,) {
    swal.fire(titulo, mensaje, "success");
}

// Info Type Alert
export function typeInfo() {
    swal.fire("Info!", "You clicked the button!", "info");
}

// Warning Type Alert
export function typeWarning() {
    swal.fire("Warning!", "You clicked the button!", "warning");
}

// Alerta
export function alerta(titulo: string, contenido: string) {
    swal.fire(titulo, contenido, "warning");
}

// Error Type Alert
export function typeError() {
    swal.fire("Error!", "You clicked the button!", "error");
}

// Alerta error modificada
// export function alertaError(titulo: string, mensaje: string,) {
//     swal.fire(titulo, mensaje, "error");
// }

// Primary Type Alert
export function typePrimary() {
    swal.fire("Primary!", "Here's a message!");
}


// Custom Icon
export function customIcon() {
    swal.fire({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
}

// Auto close timer
export function autoClose() {
    swal.fire({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}

// Allow Outside Click
export function outsideClick() {
    swal.fire({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}

// Ajax Request
// export function ajaxRequest() {
//     swal.fire({
//         title: 'Submit email to run ajax request',
//         input: 'email',
//         showCancelButton: true,
//         confirmButtonText: 'Submit',
//         showLoaderOnConfirm: true,
//         preConfirm: function () {
//             return new Promise(function (resolve) {
//                 setTimeout(function () {
//                     //resolve();
//                 }, 2000);
//             });
//         },
//         allowOutsideClick: false
//     }).then(function (email) {
//         if (email) {
//             swal.fire({
//                 type: 'success',
//                 title: 'Ajax request finished!',
//                 html: 'Submitted email: ' + email
//             });
//         }
//     })
// }

// Button Options
// export function customButton() {
//     swal.fire({
//         title: '<i>HTML</i> <u>example</u>',
//         type: 'info',
//         html:
//             'You can use <b>bold text</b>, ' +
//             '<a href="//github.com">links</a> ' +
//             'and other HTML tags',
//         showCloseButton: true,
//         showCancelButton: true,
//         confirmButtonText:
//             '<i class="fa fa-thumbs-up"></i> Great!',
//         cancelButtonText:
//             '<i class="fa fa-thumbs-down"></i> Opps!'
//     })
// }

// Prompt Function
// export function promptFunction() {
//   swal.mixin({
//     input: 'text',
//     confirmButtonText: 'Next &rarr;',
//     showCancelButton: true,
//     progressSteps: ['1', '2', '3']
//   }).queue([
//     {
//       title: 'Question 1',
//       text: 'Chaining swal2 modals is easy'
//     },
//     'Question 2',
//     'Question 3'
//   ]).then((result) => {
//     if (result.value) {
//       swal.fire({
//         title: 'All done!',
//         html:
//           'Your answers: <pre><code>' +
//             JSON.stringify(result.value) +
//           '</code></pre>',
//         confirmButtonText: 'Lovely!'
//       })
//     }
//   })

// }

// Confirm Button Action
// export function confirmText() {
//   swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.value) {
//       swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })
// }

// Confirm & Cancel Button
// export function confirmCancelButton() {
//     swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         confirmButtonClass: 'btn btn-success btn-raised mr-5',
//         cancelButtonClass: 'btn btn-danger btn-raised',
//         buttonsStyling: false
//     }).then(function () {
//         swal.fire(
//             'Deleted!',
//             'Your imaginary file has been deleted.',
//             'success'
//         )
//     })
// }

// Confirm & Cancel Button
// export async function confirmarCancelarBoton(accion:string) {
//     let response = false;
//     await swal.fire({
//         title: 'Esta seguro que desea ' + accion.toLowerCase(),
//         text: "No podra revertir esta accion",
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText: accion,
//         cancelButtonText: 'Cancelar',
//         confirmButtonClass: 'btn btn-success btn-raised mr-5',
//         cancelButtonClass: 'btn btn-danger btn-raised',
//         buttonsStyling: false
//     }).then((result) => {
//         // console.log(result)
//         if (result.value) {
//             response = result.value;
//         }
//     })
//     console.log(response)
//     return response;
// }

// Confirm & Cancel Button
// export async function confirmarCancelarBotonAdaptado(accion:string, msg:string) {
//     let response = false;
//     await swal.fire({
//         title: 'Esta seguro que desea ' + accion.toLowerCase(),
//         text: msg,
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText: accion,
//         cancelButtonText: 'Cancelar',
//         confirmButtonClass: 'btn btn-success btn-raised mr-5',
//         cancelButtonClass: 'btn btn-danger btn-raised',
//         buttonsStyling: false
//     }).then((result) => {
//         // console.log(result)
//         if (result.value) {
//             response = result.value;
//         }
//     })
//     console.log(response)
//     return response;
// }

// Chaining modals / Steps
// export function steps() {
//     swal.mixin({
//         confirmButtonText: 'Next &rarr;',
//         showCancelButton: true,
//         cancelButtonColor: '#FF586B',
//         animation: false
//     });

//     var steps = [
//         {
//             title: 'Step 1',
//             text: 'Chaining modals is easy with Step 1'
//         },
//         {
//             title: 'Step 2',
//             text: 'Chaining modals is easy with Step 2'
//         },
//         {
//             title: 'Step 3',
//             text: 'Chaining modals is easy with Step 3'
//         },
//     ];

//     swal.queue(steps).then(function () {
//         swal.fire({
//             title: 'All done!',
//             text: 'Great job :)',
//             confirmButtonText: 'Lovely!',
//             showCancelButton: false
//         });
//     }).then(function () {
//         swal.mixin();
//     });
// }


export async function confirmarCancelarAccion(accion:string) {
    let response:boolean = false;
    await swal.fire({
        title: 'Desea ' + accion.toLowerCase(),
        text: 'Confirme si desea realizar la accion',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        response = result.isConfirmed;
    });
    return response;
}



export function alertaExitosa(titulo: string, mensaje: string) {
    swal.fire(titulo, mensaje, "success");
}

export function alertaError(titulo: string, mensaje: string) {
    swal.fire('Error al ' + titulo.toLowerCase(), mensaje, "error");
}
