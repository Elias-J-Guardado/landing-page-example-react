import Swal from "sweetalert2";

function AlertaExito() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "El correo ha sido enviado correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

export {AlertaExito};