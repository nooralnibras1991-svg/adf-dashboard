// Arabic note name (exactly as in data.js) -> photo key in img/notes/<key>.webp
// null = name could not be identified with certainty, so it gets no photo (better none than a wrong one)
window.NOTE_IMG = {
// citrus
"البرغموت":"bergamot","برغموت كالابريا":"bergamot","البرغموت الصقلي":"bergamot","أوراق البرغموت":"bergamot_leaf",
"الليمون":"lemon","الليمون الصقلي":"lemon","الليمون الإيطالي":"lemon","أشجار الليمون":"lemon_branch","الليمون المسكر":"candied_lemon","فطيرة ميرينغ الليمون":"lemon_meringue",
"الليمون الأخضر":"lime","الليم":"lime",
"البرتقال":"orange","البرتقال الصقلي":"orange","البرتقال الأحمر":"blood_orange","البرتقال المر":"bitter_orange","قشور البرتقال":"orange_peel",
"الماندرين":"mandarin","الماندرين الأحمر":"mandarin","تانجرين":"mandarin","الماندرين الأخضر":"green_mandarin","أوراق الماندرين":"mandarin_leaf","زهر الماندرين":"mandarin_blossom",
"الجريب فروت":"grapefruit","الجريب فروت الوردي":"grapefruit","زهر الجريب فروت":"grapefruit_blossom",
"الإطرنج":"citron","يوزو":"yuzu","الحمضيات":"citrus_mix","عشب الليمون":"lemongrass","البيتيتغرين":"petitgrain",
"زهرة البرتقال":"orange_blossom","زهر البرتقال الأفريقي":"orange_blossom","زهر البرتقال التونسي":"orange_blossom","زهر البرتقال الفرنسي":"orange_blossom","النيرولي":"orange_blossom","البرتقال الكاذب":"mock_orange",
// fruits
"التفاح":"apple","التفاح الأحمر":"apple","التفاح الأخضر":"green_apple","تفاح جراني سميث":"green_apple","تفاح الحلوى":"caramel_apple","تفاح الكراميل":"caramel_apple","التفاح المثلج":"frosted_apple","التفاح النجمي":"star_apple",
"الكمثرى":"pear","الخوخ":"peach","الخوخ الأبيض":"white_peach","الخوخ الأملس":"nectarine","المشمش":"apricot","البرقوق":"plum",
"الكشمش الأسود":"blackcurrant","شراب الكشمش الأسود":"blackcurrant_syrup","براعم الكشمش":"blackcurrant_buds","الكشمش الأحمر":"redcurrant",
"توت العليق":"raspberry","زهر توت العليق":"raspberry_blossom","التوت الأحمر":"red_berries","الفراولة":"strawberry","الكرز":"cherry","الكرز الحامض":"sour_cherry",
"التوت الأزرق":"blueberry","التوت البري":"cranberry","بلاك بيري":"blackberry","توت بويسن":"boysenberry",
"الأناناس":"pineapple","زهر الأناناس":"pineapple_flower","المانجو":"mango","فاكهة العاطفة":"passion_fruit","الليتشي":"lychee","الليتشي الأحمر":"lychee",
"جوز الهند":"coconut","لبن جوز الهند":"coconut_milk","عصير جوز الهند":"coconut_water","بودرة جوز الهند":"desiccated_coconut",
"شمام":"cantaloupe","البطيخ":"watermelon","الرمان":"pomegranate","الكيوي":"kiwi","ثمار التين":"fig","أوراق التين":"fig_leaf","التمر":"dates","العنب":"grapes","الجوافة":"guava","برسيمون":"persimmon",
"الفواكه":"fruit_mix","الفواكه الاستوائية":"tropical_fruits","الفواكه المجففة":"dried_fruits","الخيار":"cucumber","أوراق الطماطم":"tomato_leaf","الراوند":"rhubarb","أوراق الراوند":"rhubarb",
"توت العرعر":"juniper","العرعر":"juniper",
"اللوز":"almond","اللوز المر":"almond","حليب اللوز":"almond_milk","زهر اللوز":"almond_blossom","الفستق":"pistachio","الكستناء":"chestnut",
"زهر الكرز":"cherry_blossom","زهر الخوخ":"peach_blossom",
// florals
"الورد":"rose","الورد التركي":"rose","الورد الدمشقي":"rose","الورد البلغاري":"rose","ورد طائفي":"rose","ورد غراس":"rose","ورد ماي":"rose_may",
"الورد الأحمر":"red_rose","الورد الأحمر التركي":"red_rose","الورد الأبيض":"white_rose","ماء الورد":"rose_water","بوماروز":"rose",
"الياسمين":"jasmine","الياسمين المصري":"jasmine","الياسمين الهندي":"jasmine","ياسمين سامباك":"jasmine_sambac","أوراق الياسمين":"jasmine_leaf",
"الخزامى":"lavender","مستخلص الخزامى":"lavender",
"السوسن":"iris","سوسنة باليدا":"iris","جذور السوسن":"orris_root",
"زنبق الوادي":"lily_of_the_valley","الزنبق":"lily","زهرة الليلي":"lily","زنبق الماء":"water_lily","مسك الروم":"tuberose","مسك الروم الهندي":"tuberose",
"البنفسج":"violet","البنفسج الأسود":"violet","البنفسج الأبيض":"white_violet","أوراق البنفسج":"violet_leaf",
"إبرة الراعي":"geranium","اللقلقي":"geranium","الغرنوق الدموي":"geranium",
"الفاوانيا":"peony","الفاوانيا الوردية":"peony","الفاوانيا الحمراء":"red_peony",
"الغاردينيا":"gardenia","الفريزيا":"freesia","الماغنوليا":"magnolia","الأوركيد":"orchid","الأوركيد الأسود":"black_orchid","أوركيد الفانيلا":"vanilla_flower",
"الهيلوتروب":"heliotrope","أوسمانثوس":"osmanthus","اللوتس":"lotus","اللوتس الوردي":"lotus","اللوتس الأزرق":"blue_lotus","أوراق اللوتس":"lotus_leaf",
"الفرانجيباني":"frangipani","زهر تياري":"tiare","يلانغ يلانغ":"ylang","النرجس":"narcissus","ميموسا":"mimosa","شجرة الحرير":"mimosa",
"الليلك":"lilac","الليلك الأخضر":"lilac","الياقوتية":"hyacinth","زهر الزيزفون":"linden","زهر الجينتيانا":"gentian","ريزيدا":"reseda",
"زهر القطيفة":"marigold","زهر القرنفل":"carnation","زهر العسل":"honeysuckle","زهر بخور مريم":"cyclamen","زهر جوزة الطيب":"nutmeg_flower",
"زهر الشمعية":"wax_flower","زهرة القطن":"cotton_flower","التيوليب":"tulip","البازلاء الحلوة":"sweet_pea","بابونغ":"chamomile",
"الزهور":"flower_mix","الزهور البيضاء":"white_flowers",
// green, herbs, tea
"أوراق خضراء":"green_leaves","الأوراق الخضراء":"green_leaves","النعناع":"mint","الريحان":"basil","إكليل الجبل":"rosemary","المريمية":"sage","الزعتر":"thyme","الطرخون":"tarragon",
"الكزبرة":"coriander","الغار":"bay_leaf","الشمر":"fennel","الينسون":"anise","الأعشاب":"herbs","العشب":"grass","البامبو":"bamboo","اللبلاب":"ivy","الصبار":"cactus","القنب":"hemp",
"الجلبانوم":"galbanum","الشيح":"wormwood","شراب الأفسنتين":"absinthe","شيزو":"shiso","البردي":"papyrus",
"الشاي":"tea","أوراق الشاي":"tea","الشاي الأسود":"black_tea","الشاي الصيني الأسود":"black_tea","شاي إيرل غراي":"earl_grey",
"التبغ":"tobacco","أوراق التبغ":"tobacco","الطحالب":"moss","طحلب البلوط":"oakmoss","شجر البلوط":"oak",
// spices
"القرفة":"cinnamon","قرفة سيلان":"cinnamon","الهيل":"cardamom","جوزة الطيب":"nutmeg","الزعفران":"saffron",
"الفلفل الوردي":"pink_pepper","الفلفل":"black_pepper","الفلفل الأسود":"black_pepper","الفلفل الأبيض":"white_pepper","الفلفل الأبيض الهندي":"white_pepper",
"فلفل سيشوان":"sichuan_pepper","فلفل تيمور":"timut_pepper","الفلفل الحلو الإسباني":"paprika","بذور البيمينتو":"allspice",
"الزنجبيل":"ginger","الزنجبيل النيجيري":"ginger","القرنفل":"clove","الكمون":"cumin","التوابل":"spice_mix","التوابل الشرقية":"spice_mix",
"العرقسوس":"licorice","السعد الهندي":"cypriol","الدافانا":"davana","الأمبريت":"ambrette",
// woods
"خشب الصندل":"sandalwood","خشب الصندل الأبيض":"sandalwood","خشب الصندل الأسترالي":"sandalwood",
"خشب الأرز":"cedar","خشب الأرز من فرجينيا":"cedar","خشب الأرز الأطلسي":"cedar",
"الأخشاب":"woods","الأخشاب الداكنة":"dark_woods","الأخشاب البيضاء":"light_woods","أخشاب شقراء":"light_woods","أخشاب الكشمير":"light_woods","خشب العنبر":"woods","إيزو إي سوبر":"woods",
"نجيل الهند":"vetiver","نجيل الهند من تاهيتي":"vetiver","نجيل الهند من بوربون":"vetiver","نجيل الهند من جاوة":"vetiver",
"الباتشولي":"patchouli","أكيغالاوود":"patchouli",
"العود":"oud","العود الهندي":"oud","العود الكمبودي":"oud",
"أخشاب الغاياك":"guaiac","خشب الورد البرازيلي":"rosewood","خشب الماهوجني":"mahogany","أخشاب البتولا":"birch","خشب الساج":"teak","أخشاب الأبنوس":"ebony",
"شجرة السرو":"cypress","الصنوبر":"pine","إبر الصنوبر":"pine","التنوب":"fir","بلسم التنوب":"fir","أصماغ التنوب":"resins",
// resins, ambers, musks, leather
"العنبر":"amber","العنبر الأبيض":"amber","العنبر الأسود":"amber","العنبر الرمادي":"ambergris","الأمبروكسان":"ambergris",
"البخور":"incense","اللبان":"frankincense","المر":"myrrh","الجاوي":"benzoin","بنزوين سيام":"benzoin","اللابدانوم":"labdanum","الإليمي":"elemi","الجاوشير":"opoponax",
"الراتينجات":"resins","نوتات بلسمية":"resins","بسلم كوباهو":"resins","بلسم تولو":"resins","الدخان":"smoke",
"المسك":"musk","المسك الأبيض":"musk","المسك الأسود":"musk","مسك الزباد":"musk","نوتة حيوانية":"musk",
"الجلود":"leather","جلد الغزال":"suede","الجلد المدبوغ الأبيض":"suede","البودرة":"powder","المخمل":"velvet",
// gourmand
"الفانيليا":"vanilla","فانيليا مدغشقر":"vanilla","فانيليا بوربون":"vanilla","الفانيليا الهندية":"vanilla","قشور الفانيليا السوداء":"vanilla",
"حبوب التونكا":"tonka","الكاراميل":"caramel","العسل":"honey","العسل الأبيض":"honey","شمع العسل":"beeswax","السكر":"sugar","سكر محروق":"burnt_sugar",
"الكاكاو":"cocoa","الشوكولاتة":"chocolate","الشوكولاتة الداكنة":"chocolate","الشوكولاتة المكسيكية":"chocolate","الشوكولاتة البيضاء":"white_chocolate",
"القهوة":"coffee","البن العربي":"coffee","ماكياتو":"macchiato",
"حلوى اللوز":"praline","غزل البنات":"cotton_candy","المارشميللو":"marshmallow","الكريمة المخفوقة":"whipped_cream","الكاب كيك":"cupcake",
"حلوى الجيلي بين":"jelly_beans","العلكة":"bubble_gum","حلوى":"candy","حلوى الفراولة الفوارة":"strawberry_candy","باناكوتا":"panna_cotta","موس الحليب":"milk","اللبن":"milk","الزبد":"butter",
"الكافيار":"caviar","الكمأة":"truffle","الروم":"rum","الجن":"gin","الفودكا":"vodka","الشمبانيا":"champagne",
// marine, mineral, abstract (symbolic photos)
"نسيم البحر":"sea","ماء البحر":"sea","نوتات مائية":"water","نوتات بحرية":"sea","نوتات أوزونية":"water","جزيء الكالون":"sea","قطرات الندى":"dew",
"الملح":"salt","الأملاح المعدنية":"salt","النوتات المعدنية":"minerals","رمال":"sand","نوتات شمسية":"sun","الألدهيدات":"aldehydes",
// checked on Fragrantica against the original perfumes:
// شجرة الرم = West Indian Bay (Fendi Life Essence); ورد النيل = Water Hyacinth (Hugo Woman);
// كف مريم sits where Boss Spirit has artemisia/wormwood; القطيفة = marigold (Boss Sport, Chloé Narcisse)
"شجرة الرم":"bay_rum","ورد النيل":"water_hyacinth","كف مريم":"wormwood","القطيفة":"marigold","البلسم المصري":"resins",
// not identified with certainty -> no photo until confirmed
"الصفير":null,"الصفير الأزرق":null
};
