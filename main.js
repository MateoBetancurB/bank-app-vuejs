const app = Vue.createApp({
        data() {
                return {
                        titulo: "Aplicación Bancaria - Vue.js",
                        cantidad: 400,
                        enlace: "https://youtube.com/bluuweb",
                        estado: true,
                        servicios: [
                                "transferencias",
                                "pagos",
                                "giros",
                                "cheques",
                                "retiros",
                                "taxi",
                        ],
                        desactivar: false,
                };
        },
        methods: {
                agregarSaldo() {
                        this.cantidad = this.cantidad + 100;
                },
                disminuirSaldo() {
                        if (this.cantidad === 0) {
                                alert("Saldo insuficiente");
                                this.desactivar = true;
                                return;
                        }
                        this.cantidad = this.cantidad - 100;
                },
                deleteServices(index) {
                        console.log(index);
                },
        },
});
