// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.listview_settings['Subcontracting Order'] = {
	get_indicator: function (doc) {
		const status_colors = {
			"Draft": "grey",
			"Open": "orange",
			"Partially Received": "yellow",
			"Completed": "green",
			"Partial Material Transferred": "purple",
			"Material Transferred": "blue",
			"Closed": "red",
<<<<<<< HEAD
=======
			"Cancelled": "red",
>>>>>>> 171df324074f22b76c1db242580aa6a7a3257580
		};
		return [__(doc.status), status_colors[doc.status], "status,=," + doc.status];
	},
};