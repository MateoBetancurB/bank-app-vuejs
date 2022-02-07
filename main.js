const app = Vue.createApp({
	data() {
		return {
			titulo: "Aplicación Bancaria - Vue.js",
			cantidad: 500,
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
			footer: "footer del sitio web",
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
	computed: {
		colorCantidad() {
			return this.cantidad > 500 ? "text-success" : "text-danger";
		},
	},
});
// tabla para agregar y quitar servicios
// agregar valor dinámico - input
