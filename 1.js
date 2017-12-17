

//lấy dữ liệu 

var getData = [
		{
			id: 1,
			ten: "Thai Thien",
			age: 18,
			job: "SV"
		},

		{
			id:2,
			ten: "ANH",
			age: 20,
			job: "di lam"
		}
]
for (var i = 0; i < getData.length; i++) {
	var noidung = `<div class="noidung">
		<h1>${getData[i].ten}</h1>
		<h2>${getData[i].tuoi}</h2>
		<h3>${getData[i].job}</h3>
	</div>`
	console.log(noidung);
}