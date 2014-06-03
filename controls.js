		var countryCodes = {'Canada': 'CA', 'Sao Tome and Principe': 'ST', 'Guernsey': 'GG', 'Iran': 'IR', 'Lithuania': 'LT', 'Saint Pierre and Miquelon': 'PM', 'Saint Helena, Ascension and Tristan da Cunha': 'SH', 'Ethiopia': 'ET', 'Aruba': 'AW', 'Swaziland': 'SZ', 'Belize': 'BZ', 'Argentina': 'AR', 'Cameroon': 'CM', 'Burkina Faso': 'BF', 'Turkmenistan': 'TM', 'Ghana': 'GH', 'Saudi Arabia': 'SA', 'Togo': 'TG', 'Cape Verde': 'CV', 'United States Minor Outlying Islands': 'UM', 'Cocos (Keeling) Islands': 'CC', 'Faroe Islands': 'FO', 'Guatemala': 'GT', 'Bosnia and Herzegovina': 'BA', 'Kuwait': 'KW', 'Russia': 'RU', 'Germany': 'DE', 'Bonaire, Sint Eustatius and Saba': 'BQ', 'Virgin Islands, British': 'VG', 'Spain': 'ES', 'Liberia': 'LR', 'Maldives': 'MV', 'Armenia': 'AM', 'Jamaica': 'JM', 'Oman': 'OM', 'Costa Rica': 'CR', 'Christmas Island': 'CX', 'Gabon': 'GA', 'Niue': 'NU', 'Monaco': 'MC', 'Wallis and Futuna': 'WF', 'New Zealand': 'NZ', 'Yemen': 'YE', 'Jersey': 'JE', 'Pakistan': 'PK', 'Greenland': 'GL', 'Samoa': 'WS', 'Norfolk Island': 'NF', 'United Arab Emirates': 'AE', 'Guam': 'GU', 'Vietnam': 'VN', 'Svalbard and Jan Mayen': 'SJ', 'Lesotho': 'LS', 'Saint Vincent and the Grenadines': 'VC', 'Kenya': 'KE', 'Macao': 'MO', 'Turkey': 'TR', 'Afghanistan': 'AF', 'Northern Mariana Islands': 'MP', 'Eritrea': 'ER', 'Solomon Islands': 'SB', 'India': 'IN', 'Saint Lucia': 'LC', 'Hungary': 'HU', 'San Marino': 'SM', 'Kyrgyzstan': 'KG', 'French Polynesia': 'PF', 'France': 'FR', 'Macedonia': 'MK', 'Syria': 'SY', 'Bermuda': 'BM', 'Slovakia': 'SK', 'Somalia': 'SO', 'Peru': 'PE', 'Vanuatu': 'VU', 'Nauru': 'NR', 'Norway': 'NO', 'Malawi': 'MW', 'Cook Islands': 'CK', 'Benin': 'BJ', 'Democratic Republic of the Congo': 'CD', 'Western Sahara': 'EH', 'Cuba': 'CU', 'Montenegro': 'ME', 'Saint Kitts and Nevis': 'KN', 'British Indian Ocean Territory': 'IO', 'Heard Island and McDonald Islands': 'HM', 'China': 'CN', 'Micronesia, Federated States of': 'FM', 'Antigua and Barbuda': 'AG', 'Dominican Republic': 'DO', 'Azerbaijan': 'AZ', 'Ukraine': 'UA', 'Bahrain': 'BH', 'Tonga': 'TO', 'Indonesia': 'ID', 'Qatar': 'QA', 'Libya': 'LY', 'Finland': 'FI', 'Central African Republic': 'CF', 'Mauritius': 'MU', 'Tajikistan': 'TJ', 'Sweden': 'SE', 'Australia': 'AU', 'Mali': 'ML', 'Cambodia': 'KH', 'American Samoa': 'AS', 'Bulgaria': 'BG', 'United States of America': 'US', 'Romania': 'RO', 'Angola': 'AO', 'French Southern Territories': 'TF', 'Portugal': 'PT', 'South Africa': 'ZA', 'Tokelau': 'TK', 'Fiji': 'FJ', 'South Georgia and the South Sandwich Islands': 'GS', 'Liechtenstein': 'LI', 'Venezuela': 'VE', 'Malaysia': 'MY', 'Senegal': 'SN', 'Mozambique': 'MZ', 'Uganda': 'UG', 'Japan': 'JP', 'Niger': 'NE', 'Isle of Man': 'IM', 'Brazil': 'BR', 'Pitcairn': 'PN', 'Guinea': 'GN', 'Panama': 'PA', 'Korea, Republic of': 'KR', 'Saint Martin (French part)': 'MF', 'Luxembourg': 'LU', 'Virgin Islands, U.S.': 'VI', 'Bahamas': 'BS', 'Gibraltar': 'GI', 'Ivory Coast': 'CI', 'Italy': 'IT', 'Nigeria': 'NG', 'Ecuador': 'EC', 'Czech Republic': 'CZ', 'Belarus': 'BY', "Korea, Democratic People's Republic of": 'KP', 'Algeria': 'DZ', 'Slovenia': 'SI', 'El Salvador': 'SV', 'Tuvalu': 'TV', 'Marshall Islands': 'MH', 'Chile': 'CL', 'Puerto Rico': 'PR', 'Belgium': 'BE', 'Kiribati': 'KI', 'Haiti': 'HT', 'Iraq': 'IQ', 'Hong Kong': 'HK', 'Sierra Leone': 'SL', 'Georgia': 'GE', "Laos": 'LA', 'Gambia': 'GM', 'Poland': 'PL', 'Namibia': 'NA', 'Morocco': 'MA', 'Albania': 'AL', 'Croatia': 'HR', 'Mongolia': 'MN', 'Guinea-Bissau': 'GW', 'Thailand': 'TH', 'Switzerland': 'CH', 'Grenada': 'GD', 'Bangladesh': 'BD', 'Taiwan': 'TW', 'Honduras': 'HN', 'Seychelles': 'SC', 'United Republic of Tanzania': 'TZ', 'Chad': 'TD', 'Estonia': 'EE', 'Uruguay': 'UY', 'Equatorial Guinea': 'GQ', 'Lebanon': 'LB', 'Uzbekistan': 'UZ', 'Tunisia': 'TN', 'Falkland Islands (Malvinas)': 'FK', 'Holy See (Vatican City State)': 'VA', 'Timor-Leste': 'TL', 'Dominica': 'DM', 'Colombia': 'CO', 'Burundi': 'BI', 'Cyprus': 'CY', 'Barbados': 'BB', 'Madagascar': 'MG', 'Palau': 'PW', 'Denmark': 'DK', 'Bhutan': 'BT', 'Sudan': 'SD', 'Bolivia': 'BO', 'Nepal': 'NP', 'Malta': 'MT', 'Brunei Darussalam': 'BN', 'Comoros': 'KM', 'Netherlands': 'NL', 'Suriname': 'SR', 'Cayman Islands': 'KY', 'Anguilla': 'AI', 'Turks and Caicos Islands': 'TC', 'Israel': 'IL', 'Bouvet Island': 'BV', 'Iceland': 'IS', 'Zambia': 'ZM', 'Austria': 'AT', 'Papua New Guinea': 'PG', 'Trinidad and Tobago': 'TT', 'Zimbabwe': 'ZW', 'Jordan': 'JO', 'Martinique': 'MQ', 'Kazakhstan': 'KZ', 'Philippines': 'PH', 'Moldova': 'MD', 'Djibouti': 'DJ', 'Mauritania': 'MR', 'Ireland': 'IE', 'Mayotte': 'YT', 'Montserrat': 'MS', 'New Caledonia': 'NC', 'Andorra': 'AD', 'Sri Lanka': 'LK', 'Latvia': 'LV', 'South Sudan': 'SS', 'Guyana': 'GY', 'Guadeloupe': 'GP', 'Rwanda': 'RW', 'Myanmar': 'MM', 'Mexico': 'MX', 'Egypt': 'EG', 'Nicaragua': 'NI', 'Singapore': 'SG', 'Republic of Serbia': 'RS', 'Botswana': 'BW', 'United Kingdom': 'GB', 'Antarctica': 'AQ', 'Republic of the Congo': 'CG', 'Sint Maarten (Dutch part)': 'SX', 'Greece': 'GR', 'Paraguay': 'PY', 'French Guiana': 'GF', 'Palestinian Territory, Occupied': 'PS', 'Kosovo': 'XK'}

    var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

		info.update = function (props) {
    		this._div.innerHTML = (props ?
        	'<h4>' + props.SOVEREIGNT + '</h4><br><img src=flags/' + countryCodes[props.SOVEREIGNT] + ".png>"
        	: '');
		};

       var zoomOut = L.control();

       zoomOut.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'zoomOut');
            return this._div;
        }

        
//possible fix to the zoomOut method
//_onDoubleClick: function (e) {
 // 		var map = this._map,
 //This next line was a previous implementation which was taken out.
 //-		    zoom = map.getZoom() + 1;
 //this next line was added as a revision
 //+		    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);
  
  	//	if (map.options.doubleClickZoom === 'center') {
  		//	map.setZoom(zoom);
//Of course, this must be changed to run with our map implementation, but I think this is a good starting point for a fix.
