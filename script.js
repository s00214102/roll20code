on(
	"change:attr_vitality change:attr_might_modifier change:attr_mastery",
	function (eventInfo) {
		getAttrs(
			["attr_vitality", "attr_might_modifier", "attr_mastery"],
			function (values) {
				const vitality = parseInt(values.attr_vitality, 10);
				const mightModifier = parseInt(values.attr_might_modifier, 10);
				const mastery = parseInt(values.attr_mastery, 10);

				if (!isNaN(vitality) && !isNaN(mightModifier) && !isNaN(mastery)) {
					const staminaMax = 2 * vitality + mightModifier + mastery;
					setAttrs({
						attr_stamina_max: staminaMax,
					});
				} else {
					setAttrs({
						attr_stamina_max: "",
					});
				}
			}
		);
	}
);
