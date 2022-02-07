app.component("footer-banco", {
	props: ["cantidad", "fecha"],
	template: `
    <div class="bg-dark mt-5 p-3 text-white text-center">
        <h3>{{texto}} - {{cantidad}}</h3>
        <p>{{fecha}}</p>
    </div>
    `,
	data() {
		return {
			texto: "Footer de mi sitio web",
		};
	},
});
