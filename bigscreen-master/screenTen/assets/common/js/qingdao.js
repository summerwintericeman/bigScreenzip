(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('qingdao', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "370203",
            "properties": {
                "name": "市北区",
                "cp": [120.355026, 36.083819],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@A@@@A@AAA@@@@@AB@@A@@@@@A@@@AB@@A@@@@@@@@@@@@@@AA@@@@AA@@@@@@@A@@AA@@@A@@A@@@@A@@@@BA@@@A@A@@BA@@@A@@@A@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@B@AA@@@@@A@@@@@@@@AA@@@A@C@E@@@@CA@@@C@A@A@@@@@E@@@A@A@A@@@A@@@@A@@@@B@@A@@@AA@@@@@C@@@@A@@B@@@@@BC@A@@@@A@CAA@@@@A@@@@@A@@@@@@@A@A@@@A@@@@@@B@@@@@@@@@@@@A@@A@@AA@@@@@@@AA@@@@@@@@@@@@B@@AA@@@@@A@@@@AA@@@@@AA@@@@@@@@A@@AA@A@@@@@@@A@@@@@A@@@@@@@@@@@AB@@@BAB@@@@@@A@@@@@@@@@A@A@A@@@@@@@@@@@@@@@@AA@@@@@@@A@@@@@@@@@A@@B@@@@@@AB@@@@@@@@A@@@@@@@@@@AA@AA@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@A@A@@@@@@@@@@@@@@@A@@@@BA@@@@@A@@@@@@@A@@A@@A@@@@B@@@@A@@@@@@@@@@@@@A@@@@@@@@@@BA@@B@@A@@B@@@@A@@@@@@@@@C@@@@@@@@@A@@@A@@@AA@@@@A@@@A@@@@A@@@@@@@@@@@AA@@@A@@@@@A@@@A@A@A@@AA@@@A@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@@@@@@AB@@@@@@@@A@@@@@ECQLF@DBB@@B@@@B@@A@EA@@A@@BBBHH@B@@@BA@C@AB@@@B@@@@HBBB@B@B@D@D@B@@BBNFBB@BEB@B@@@BFHBBB@B@BAB@B@BBBDBFBTBHDFZjBBBBHHHC^KHAFADBFBB@@DJ@H@D@B@DAB@DABA@@BCBC@C@@B@@A@A@A@@@AB@@@@A@@@@@ABEDADAB@@@@@HAD@F@@@@@@@B@A@@@AA@@@@A@@A@@A@@@AA@@@@@@AAA@@@@AA@AAA@B@@ABAB@BAB@@AB@@@@@@A@@B@@@@A@@BA@@@@@@@@@AB@@@@A@@B@@A@@@@@AB@@A@@@@BA@@@AB@@ABA@AB@@@@AB@@A@AB@@@@A@@BA@@BA@@@AB@@A@AB@@@@AB@@@A@B@@A@@@AB@@ABA@@@AG@OCA@A@@AA@@E"],
                "encodeOffsets": [
                    [123310, 36958]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370202",
            "properties": {
                "name": "市南区",
                "cp": [120.395966, 36.070892],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@RKFD@@@@B@@@@@@@@@BA@@@@@@@@@@@@@A@@@@@A@@@@@A@@@@@@@A@@B@@@B@@BB@B@B@@@B@@@@@B@@@B@@B@@@@@@@@@@@B@@B@@@B@@@@@BB@@B@@@B@@@@@@@@@D@@@@@@@@@B@@@@@@AB@@@@AB@@A@@@@@@@@B@@@@@@@@@@@@@B@@@@@@A@@B@@@@BB@@@@@@@B@@@@@B@@A@@B@@@@@@@@@@@@@@@B@B@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@BBB@@B@@@@@@@@B@@@@@@@@@BA@@@@@@@AB@@@@@@@@@B@@@@@@@B@@B@@@@@@@@@@@@@@B@B@B@@@@@@@@@B@@@@@@@BA@A@@BA@@@@@@@@@@B@@@@@B@@@@@@@B@B@@BB@@@@@@@@@BB@@@@B@@B@@B@@@@@B@@BA@@@@@@@@@@@@@BB@@@@@@B@@BB@@@@B@@@@@@@@@@A@@@@@@@@B@@@B@B@@@@@@@B@@@@@B@@B@DBB@@@@@@BAD@@@@A@@@@B@@D@@@@@B@@B@@@BA@@@@@@B@@B@@@B@B@B@@@F@@@@@B@B@D@@@B@@D@@F@D@B@@@B@@B@@@@@@B@@@@@B@@B@AB@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@@B@@@B@@AB@B@@@B@@A@@B@@@@@@BB@@@B@@BB@@@@@@@B@@B@@B@@B@@@@@@@@@@@@B@@@BA@@B@@@@@B@@@BA@@@@B@BBB@@@B@@@@A@@B@@@@@@@@A@@@@@@B@@A@@@@@@@@AA@@@A@@@@@@@@@@@A@@@@@A@@@AB@@@@@B@@@@@@A@@@@@@@A@@@@@@AA@@@@@A@@@@@A@@B@@A@@@@@@@@AAA@@@AA@@AA@@@@A@@B@@A@@@@@@@@@A@CA@@@@@AB@BABABADCB@BCB@@A@@@@@@@@@@A@@A@@@@@@@@@@@@@@DCDCBA@@@@@@@@@A@@@@@@@A@@@@@CAA@@C@C@A@GDA@C@A@ACGCECG@G@Q@ABA@BB@@BBB@BD@B@BABABA@@@A@AAA@@AAA@@AAA@CBAAA@A@CAAAA@A@A@@AAAAA@A@@@@BAB@B@@A@A@@@A@AAAAACAAAC@A@A@@BA@@B@BBBAB@@@@ABABA@ABA@A@AA@@A@A@C@A@AA@@AAACCAAAA@A@A@A@C@@B@B@@@BB@BBBB@@BDBB@B@@ADABABA@A@A@AACCCAC@G@C@A@A@@B@@@F@B@@B@@@@ABA@@@@B@@@@B@B@B@B@BA@@BA@A@A@A@@AB@@A@@AA@@A@@@AB@B@BA@A@A@AA@@AA@AAA@@AA@@A@@ABAB@@A@AA@@@AAA@@@A@A@IBGBC@A@A@@A@@@A@ABABC@A@A@@@AA@@AA@A@@BA@@B@BA@@@A@@@A@@@@AAA@@AAA@@BA@@BA@@D@@@BDBBB@BBD@B@F@FBB@BBDBBD@@@B@@@B@B@@B@@@BAB@@BBDDB@BB@@@B@@@BAB@BBB@BB@FD"],
                "encodeOffsets": [
                    [123193, 36945]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370213",
            "properties": {
                "name": "李沧区",
                "cp": [120.421236, 36.160023],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@A@@@@@@@E@C@GB@@@@A@CBCBAF@B@@@@@B@@A@@B@@@B@B@BA@@@@DADAD@@ABCBA@CBA@C@G@I@@CA@EACAEBGB]LGDHHBD@@AD@B@DDFDBDBJ@D@BD@DAFKZGJE@CBEBOLL`JA@@@B@@B@@@BAB@B@@@B@B@B@@@BBB@@@B@@@B@@@B@BB@@A@@B@@@@A@@B@@@@B@B@@BB@@@@@@B@@B@@@B@B@@@@B@@@B@B@@@@A@@@AB@B@@@@@@B@BBB@@@@B@@BB@@@@B@@@@@BB@@@@@@F@@@D@B@B@@@@@@@@@B@@@@@@@@BB@@@D@DA@@@AB@@@@C@AB@@@@@D@@EDB@BB@@A@@@@@@B@B@AA@@@@D@@@BAD@FBB@@@@AB@@@@B@@B@@@B@@@F@@@@@@@@A@AB@@@@@@@B@@@D@@@@A@A@A@@@@@@@@B@@@@AB@@@B@@@BA@A@A@@DB@A@@@@@AB@@AB@@@@A@@@@@@@AB@B@B@B@BB@@@@@@@A@@A@B@@C@@B@@@BAAAAAA@AAAC@@@ABA@A@A@@BC@AH@DB@@B@@@@@B@@@@@@@@@JBBDBB@@D@B@@@BA@@@@DA@@@@@@@@DABAB@DABA@@@A@@@A@@BAB@B@D@B@BB@BB@B@@@B@BAB@B@BBB@BBFBBBFFDDB@BB@BB@BB@BFB@@BB@@B@B@DAD@DA@@@A@@@ABAD@DB@@@@B@BAD@B@@@B@BA@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@A@@@@A@@@@@@A@@@@@@@@@A@@A@@@@@@A@@@@@@@@AA@@@@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@A@@@@@AB@@@@A@A@@@@@@B@@A@@@@A@@@@@@A@@A@@@@@@A@@@@@@A@@@@@@@@@@@@@@@A@@@@@@A@@ACAAA@BABA@C@A@AA@AA@@@@C@AA@A@@@@A@@@@@@@A@CAA@AG@A@@@@@@@@@@A@@@@A@@@@@@@@AE@@@@@@@A@@@AA@@@A@@@@@@@@AA@@@@@@@@@@@A@@@@A@@@@@@@@@@@@A@@A@@@@@@@@@@@A@@@@@@@@A@@@@A@@A@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@AA@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@A@@A@@@@@@@@@@@AA@@@@@@@@@@@@A@@@@@@@@@A@@@@@A@@@A@@AA@@@@@A@@@@@AA@@@@@@A@@@@@A@@AA@@@@@AA@@@@A@@@@@@AA@@@A@@A@@@@@@@@A@@A@@@@@@@@A@@A@@@@@@AA@@@@@@@@@@A@@A@@@@A@@@@A@@@@A@@@@AA@@@@@@@@@@@A@@@@@@A@@@@A@@@A@A@@BA@@@@@A@A@@@A@@@A@@@A@A@@@@@A@A@@@A@@@@@@@A@@@@@@@A@@@A@@@A@@@@@A@@@A@@@@@@@@@A@A@@@A@@@@@@@A@@@@@@@@AA@@A@@AAAA@@@AAAA@@AA@@@A@@A@@@@A@@AA@@@A@@A@@@@"],
                "encodeOffsets": [
                    [123311, 37002]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370212",
            "properties": {
                "name": "崂山区",
                "cp": [120.467393, 36.102569],
                "childNum": 22
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BBDAB@BA@KBCDABADCBE@C@EACACAACCEECCCAACAA@C@CBCBADEBAB@D@D@FBFBBBDDDBDBB@DAH@DABABA@CAQAEBC@CHK@A@A@AKKEE@A@C@ABADCFCBABA@CNmBG@A@CAA@ECCAA@C@ABCBC@C@O@CBCBE@CBAB@RCBA@ABAAA@AAAA@EAE@C@AAAA@ABAJCD@BCAEAKBCB@D@JDD@D@DABCBE@CACEECCCAMCI@IAGBKBSJE@AAkWOEKAEACBIDKHEBC@AACACAACAA@E@CCEECECCAEAE@E@K@EBCBABAB@BBBBD@B@D@BABABA@CBCA@AAC@C@AAAAA@@AAA@C@A@IBKBCBAFA@A@A@ACA@@AAABAHIBC@A@AACACAAAAA@A@A@A@CB@@A@@@A@@CA@A@AAA@ABIDC@A@C@A@AACAC@CAO@EAIACAEAC@EBIFABC@C@A@A@A@C@ICGCC@AACC@@AC@A@@@@A@@A@@@@AB@@@@A@@@@@A@@@AACCCCEECAACCAAACC@@AA@@@@@@B@@@@@B@@@@@@@@@@@@AA@@@@A@@@@@@AAA@@@ABABA@A@AB@ACA@A@@C@@@AA@@@A@@@@AC@A@@@AB@BA@@BA@A@A@@AAA@C@A@ABA@@@@BB@BB@@@B@@@B@@@@@@EA@D@@@@@B@@@@@@@B@@@@@@@@ABCDCD@@@@@@@@@@@@@@@BB@@@@@@@@@@@@BA@ADA@CDABABABA@@B@@@@DBB@@@@@@@@@B@@@@AB@@@@@BB@@BB@@B@BB@@@@@@@@@BA@@@@B@@@@@B@@@@BB@@@@@@@B@@@@@@@B@@@@A@@@@@A@@B@@@B@@@@@B@@@@@@@@@@@B@@BB@@@@@@@@@BA@@@@@@@@B@@@@@@A@@@@B@FB@@BB@B@PDH@@B@@AB@BA@@B@@@BA@B@@@A@@B@@A@@B@BA@@B@@AB@@AB@@@B@@A@@B@BA@@B@@A@@BAB@BA@@B@@AB@@@@@BA@@B@@@@@BA@@@@B@@A@@B@@@@@@@@AB@@@B@@A@@@@B@@@@A@@BA@ABA@AB@BA@B@BBB@@B@@B@BB@@@@@@BB@@B@@@@BB@@@@@BB@@B@@@@@@BB@@@B@@BB@@@@@@BB@@@B@@BB@BB@B@@BBBB@@@BB@@B@@@@@@B@@@@@@@B@@@B@B@@@@@@@@@B@@@B@@@@@B@@@B@@@B@@@@@@@B@@@@@@@B@@@B@B@@@@@B@B@@@B@@@B@@@B@B@@@@@B@@AB@B@@@B@@@@@@B@@@@B@@@@@@@@@@@B@@B@@B@@@@@@B@@B@@@@@@BB@@@@@@@@@@@BB@@@@@@@BB@@@@@@@@@@BB@@@@@@@@@@BB@@@B@@B@@@@B@@@@@BB@@@@B@@BB@@@@@B@@@@@@@BB@@@@B@@@@@B@@BB@@@B@@@@@B@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@BB@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@B@@@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@@@@@@@B@@B@@@@@@@@@@@B@@B@@@@@@B@@@B@@B@@@B@@@@@@BF@@@@@@@@@B@@B@@@@@@@@@@@@BBHB@DBB@@@@@@@B@@@@@@BBBD@@@@@BBB@@B@B@DABABB@BBBD@@@B@@@@B@@@@@@@@@@@@@@@B@@@@@@@@B@@@@B@@@@B@@@@B@@@@@@BA@@@@@@@@B@B@@A@@B@@@@@B@@@@B@@B@@@@@@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@B@@@@B@@@@B@@@@@@@@@B@@@@B@@@@@@B@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@ABA@@@A@C@ABA@@@@@CAC@AB@B@@@B@@CBC@CBA@A@AB@@@BBBBFDBBB@@B@@B@BD@BB@@@B@@BBBBBB@B@@@D@@BBB@@B@BB@@@DDB@BB@B@@@BBBB@@@@B@@@@BB@@@@@@@@@@@@@@B@@@@@@B@@B@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@BB@@@@@@B@@@@@@@@@B@@@@@@@B@BBB@@D@BBB@FBB@BB@@B@B@@ABBBB@@B@B@B@HB@@B@B@BAB@BBBAB@@@B@@@B@BB@AD@B@@@@ADB@@BBB@BAB@D@B@B@BAB@B@B@BBD@B@D@B@B@@@BB@BB@BBB@@BBB@@@B@BFD@@@BBBB@@@@BABAB@@@B@@@BB@DF@B@BBBBB@@@BBB@@@@@BBB@B@@B@@B@B@@BB@BB@A@BDA@@BC@@B@B@B@B@D@@@BA@BDBBABAD@@A@ABCB@B@D@BAB@BED@BA@@@@BAP@@@@@@@F@DDCDBD@@@FABAB@B@B@@@B@@@B@@BBBD@@BD@DAB@BAB@D@DAH@TB@@DADABABAFA@@B@B@@B@N@B@D@B@@@@@B@@@BB@@B@@@@B@@@@@BB@@BD@@BBBB@@@@BAB@@AB@BAB@B@BBB@BB@@@@@A@A@@AA@@@ABCAAA@@@@@@A@ABC@A@A@C@@@A@@BCDA@AF@B@B@B@@@B@B@B@D@N@B@B@@B@@"],
                    ["@@BDB@B@B@BABC@C@A@CAAAAC@A@ABA@@BBJ@B"],
                    ["@@B@@@B@B@@@@A@@CEA@@@A@@B@B@@@B@@BB"],
                    ["@@BE@EBCBABC@A@C@AAAC@ABEDCBABAD@D@BDJBDBBB@B@BA@A"],
                    ["@@BF@@BBB@B@B@@A@A@AAA@AB@@A@ACC@AAAA@A@@@@B@B@@@B@B@B@B@B"],
                    ["@@DB@@B@B@@@B@B@@@@@@@@@B@@@@A@@@@A@@@A@@A@@@@A@@AA@@B@@A@@@@@@@A@@@C@@@AB@@B@@@B@"],
                    ["@@A@@@@B@@@@@B@@BA@@@@@A@@@@"],
                    ["@@@@B@@@@AB@@@@@@A@@@@@@AA@@@B@@A@@@@@@@@B@@@@@@@B"],
                    ["@@@@@@BA@@@@@@@A@@@@A@@@@@@@@@@BA@@@B@@@@B"],
                    ["@@BBB@B@B@B@@A@@AA@AB@BA@A@@A@A@A@A@@@@BA@A@@@AB@@@B@BB@"],
                    ["@@A@@@@@@@@@AB@@B@@@@@@@B@@A@@@@"],
                    ["@@D@B@@@B@@A@A@@@@A@@@@@@@A@@@C@@@A@@@@@@@A@@B@@BB@@@@@@B@"],
                    ["@@@@@@B@@@DA@A@@@A@@AA@@@@A@@@@B@@@@@@@@A@@@@B@B@@AB@@@@@@@@B@@@"],
                    ["@@@BBB@BB@B@B@B@B@@AB@@AA@AA@A@@@@@@BAB@@@@A@@BBB@BA@@BA@A@A@@A@@AIAA@@@AB@@@BA@@@E@C@ABA@@B@@@B@@B@BBD@@@BB@@@B"],
                    ["@@B@@@@AB@@@@@@@AA@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@"],
                    ["@@@@@@@@@@B@@@B@@@@A@@@@A@@@@@@@A@@@@@@@@@@@@B@@@@"],
                    ["@@@B@@@@B@@@@@@@B@@@@A@@@@@@@A@@@@@@AA@@@@A@@@@@@@@D"],
                    ["@@@@@@B@B@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@B@@A@@@@@@B@@@@@@@@@@@@@@"],
                    ["@@BBB@B@@@@@BAB@B@@A@AB@AA@@@AA@ABA@C@A@@@AB@@@BBB@@"],
                    ["@@BBDB@@B@B@DD@@B@B@B@B@BA@@@AAA@@A@@@A@@@@@A@@@@AA@@ACAAAGACCA@A@@@@B@@BB@@BBBB@BBB"],
                    ["@@@BB@BA@@BABABEFE@ACAC@A@CFABAB@@@B@B@B@DB@"],
                    ["@@@@@@@@BA@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@"]
                ],
                "encodeOffsets": [
                    [
                        [123552, 37194]
                    ],
                    [
                        [123619, 37158]
                    ],
                    [
                        [123616, 37147]
                    ],
                    [
                        [123674, 37108]
                    ],
                    [
                        [123719, 37104]
                    ],
                    [
                        [123632, 37099]
                    ],
                    [
                        [123630, 37095]
                    ],
                    [
                        [123643, 37084]
                    ],
                    [
                        [123645, 37082]
                    ],
                    [
                        [123853, 37050]
                    ],
                    [
                        [123848, 37042]
                    ],
                    [
                        [123852, 37043]
                    ],
                    [
                        [123516, 36968]
                    ],
                    [
                        [123479, 36963]
                    ],
                    [
                        [123474, 36964]
                    ],
                    [
                        [123483, 36946]
                    ],
                    [
                        [123483, 36861]
                    ],
                    [
                        [123376, 36828]
                    ],
                    [
                        [123387, 36826]
                    ],
                    [
                        [123779, 36756]
                    ],
                    [
                        [124303, 37143]
                    ],
                    [
                        [123359, 36934]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370214",
            "properties": {
                "name": "城阳区",
                "cp": [120.389135, 36.306833],
                "childNum": 2
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@C@E@@@@@@BO@A@@B@@AFC@ABA@A@C@ADABAB@@@BCBAAAACB@@A@@@C@A@A@A@AD@@AB@ACB@A@@AAA@@@A@AA@@@@AAA@A@@@@AA@A@@AAAA@A@ACEA@@A@@@A@@BABA@A@@A@AA@A@@EC@A@A@@AA@AA@AAA@@AAA@@A@A@C@A@C@AAA@A@A@ABA@A@C@A@ABA@AA@@CA@B@@A@C@@BAAA@@@A@@@A@ABAAA@ABA@A@@@GAA@A@A@@@AAAA@BA@A@@@AAA@EAA@AAC@@@AA@A@A@@@@@@@A@@@@@@@@@A@@@@A@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@A@@@@A@@@@A@@@@@@@@@@@@@@@AA@@@@@A@@A@AA@A@@@AAAA@CC@@A@@A@AA@AA@@@C@@@AAAAAAA@@@A@@AAC@@A@AA@@@AACAAEAA@A@@BA@@AA@@EA@AAAA@@AAAA@CCEEAAEAAAA@AAA@A@ABA@@@A@A@@AAAA@C@A@A@AB@@@B@@@B@@ABCBA@ABCB@@@@@@@@CB@@@@AB@@A@C@@@AAACIA@@@@@@@@A@@@@@A@@@CAG@@BAD@@@B@BAB@B@@BDBBB@BBBBAB@@A@@@@DA@B@@@@B@@@@@@AAA@A@A@A@@B@@@@@@@B@@A@@BA@@B@@@@@BCA@@@B@BAB@@A@@@A@@B@@A@@@@@@@@@@B@B@B@@C@@@A@@@@@@@A@@B@B@@@@@@E@@@A@@@A@@@@A@@A@@B@@A@EAC@AB@@C@@@@@BBA@A@@@@@@@@BA@@ACA@FC@@@@@A@@B@D@@A@@B@@CBC@@@A@@A@@@@@@A@@@@@@@@@A@A@C@@@E@@@@@@@AA@@@@A@@@@@AA@@@A@@A@AAA@@@@@@@@ABA@@B@@@@@@A@A@@@A@@A@A@@@A@@@@A@@@@A@@AA@A@@@@@@AB@@@@@@AB@@@AAA@@@A@@@A@@@A@AA@@A@A@A@@@A@A@AB@@A@@@@A@@IBK_GFCFCFIJGHEHCDC@]EOGECAGBODIBCBAD@F@DALEBCBABK@CCECAGB]@CAAACCCEA@A@C@ABAB@D@BAB@@ABCAACCCC@G@EBEDAF@DBDFFBDADCBWBI@ECAAEIEEEAE@EBCDE^AHEDIBIAeIOEECGEOOCC]QICCCEEQTCBIDCBC@ABAB@B@@@B@BDD@BD@BBB@D@FAD@B@B@BB@@@BBB@BAB@DCDCBCBA@CACAC@A@C@C@@BABAB@B@DBBBBDBHBB@BB@B@@@D@BAB@BA@C@CAEAC@A@EDADCD@B@B@BB@@@B@B@BAB@DAB@@@@B@@@B@@@@@B@B@B@B@@@B@B@@@B@@@B@@AB@B@B@@@B@@@@@@@BA@@@@AA@@@@B@@@B@@AB@@@B@@@B@B@@@@@@@B@@A@@@@@@@@B@@@@@B@@AB@@@@@@@B@@@B@@AD@B@@@B@BB@BBBBB@B@@B@@@@@B@@@B@B@@@@BB@@@@@B@@@@@@B@@@@@@@B@@@@@@@@A@@@@@@@A@@@@A@@A@@@@@A@@@@@A@@@@BA@ADAB@BABABBBBBB@B@D@BABB@B@@@B@@@@@@@@@@B@@@@@B@@@B@@@@@B@@@@@@A@@@@@@@@@A@@@A@@@@@@@AB@@@@@@@@BB@@B@B@@@@@@@@@@@@B@@@@@@@@A@A@@@@A@@A@A@A@EFABB@B@B@@BB@@@@@@@@@@B@@@@@B@@@@B@@@@B@@B@B@B@BBB@B@DB@@@@D@B@@@@@BB@@@@B@@A@@@@B@BBB@@@@@BBB@B@@@BBB@BBB@AD@@@@BBB@B@B@@B@@@@@@@BA@@B@@@@@@BBB@B@B@D@@@@@@B@@@@@@BB@@@@@@@B@@A@@@@@@@@B@@@@@@@@@B@@@@BAB@@@B@@@B@F@FBD@B@@@B@@@@@@B@@@@@BAB@B@@@B@@B@@@B@@BB@@@B@@@BBB@@@@BB@B@D@B@@B@@B@@BB@@BB@@B@@BBBB@@@BA@@B@@@B@@@B@@@BA@@BB@BBD@B@BBB@@@@B@@@@@B@@@@D@BBB@B@@@BBB@@@@@@B@BAB@@@@@B@@@@@@BBB@@@BBB@@B@B@@@B@BD@@@D@@@B@B@@@@BAD@@@B@@@@B@@B@@@@B@@@B@B@BBB@@@AF@@B@@@@@@B@D@B@@B@@@@@B@B@@@B@@@B@@@DA@@@@@@BB@B@D@FAD@DBBBBBBBH@@BB@B@BDBBDBBBB@BABAD@BAB@B@B@D@B@D@@@H@B@DAB@B@BBFA@@BABA@AB@@@B@BD@BBBBBBD@DBB@@B@M@AF@LCHALCB@@@@@@B@D@@@@@@@@D@B@B@@A@@@@B@D@B@@@@BB@@A@C@@@A@@@@B@@A@@@CBC@A@@B@@@BA@@@A@@AA@@A@@A@@@A@ABA@@@A@@@CB@@C@AA@@@@@A@A@@@A@C@A@@@@@D@BAB@D@@@@A@AB@B@@@BB@@@A@CB@@A@@BE@@@@@@@@@@@AB@LB@@B@@@@@@@B@@CDA@@B@@@@@@@H@BBD@@A@A@A@AB@BA@@BIF@@A@@@@BAD@AAB@B@@@@@BA@A@@@A@@@AB@BA@AA@BA@@B@B@B@@@BA@@@@B@@A@@@@B@B@@@@B@B@@@@BA@@@@@C@@H@BA@F@@A@@@@B@BADB@AF@@B@B@@@@BBB@@@@@A@A@@@@F@@@HA@B@B@@D@@@@@@@@@@B@@D@@AB@B@B@@@@BB@BA@BB@@B@@B@@@AC@@@@@@B@B@@@D@@A@@FA@@B@B@B@@@B@@@@@@@@@@@@@D@@@@@@@@@@@@@B@@@@@@@@@@@BA@@BB@@H@@O@@@@@@@@@@@@@@@A@@@A@A@@@CBAJGFE@@B@B@B@D@@@B@BAB@B@@@@A@AA@A@A@@@@AD@@@@A@CA@@@B@@ABC@ABA@@B@D@F@DB@B@@@B@@A@@@@@@@@B@D@D@B@@@BB@BA@@@AB@@A@@@@B@@@@@@@DA@@@@@B@@BB@@@@B@@@B@@@BBBDBB@@BBBF@BBBB@D@@@B@@@DADAB@BBB@BBBBDBBDDDBB@@@@BBDFDFBFBH@@ABC@A@@B@@@@A@A@A@@D@@@@@@@@@@CB@AA@A@@@AB@@@@@A@@AB@@@D@@@@@BA@@@@B@BBB@A@@B@@B@@ABBB@@@@@B@@BB@B@@@@@B@@B@BABBBABB@@@B@@@@D@@CFCB@@@@A@C@A@@@@@AD@@@A@@A@@@@@@A@@@@@A@@@@AB@@@B@@@@ABA@@@@B@@@@A@@@@@@FBB@D@B@@A@C@@@@@@@E@ABA@CB@B@@@@@@@@@@@@@JD@@@ABB@@@@@@@@@@@@@@@AD@@@@@DAFCDA@@@@@@@@@@DA@@@@@@DA@@@@DAD@@@@@@@B@B@@@B@@@@@B@@A@@@@B@@@FFBCB@@@BBB@@BBB@@@@@@DABB@BBB@@B@BB@@B@BA@B@@BD@B@@B@@@@@@@@A@@A@@A@AB@@@@@@B@@B@@@AA@@@AB@@CBB@@@@@@@B@@@@@@@B@@B@B@AC@@@@B@@@B@@B@@B@@A@@B@@@@@@@AA@@AB@@@@@AA@@A@@B@@@BB@@@A@@BA@A@@@BA@@A@@@AB@B@@@AA@@@A@@B@AA@@@@@@ACAA@A@AB@@@BA@@@@@A@@B@BBB@B@B@@@BA@@BA@@@AH@@@@@@@@@B@@@B@@@@@B@B@B@@@@@@B@@@@A@@@@@@B@B@@@@D@@@@@@@B@@@@@BB@@@@@@@B@@@@@@B@@@@A@@@@B@B@@@B@B@B@@@B@@@B@@@B@B@BA@@@ABBB@B@@@@BB@D@@@D@B@BDB@@B@@CBC@@@@BB@@B@B@@@@BBB@@@B@B@B@@A@@@A@A@@B@@@@@@BB@BB@@@AB@B@B@@B@@@@A@@B@@ABB@@BB@@@B@B@D@B@BABB@@B@@@@A@@@A@@@A@@@AB@B@@A@@@@@@BAB@BA@A@@@A@A@@@A@AB@@AD@BADAD@B@@@BB@@B@B@BA@@@@@@@@D@@@@@@@@@@@@B@@@B@@BB@@@@@@B@BBB@@B@BA@CA@@@@@@@@A@B@@@@@@BB@@BA@@@@D@@@B@@@@@@@BA@@@@@AB@@@@@B@@AB@@B@@B@@DDFCFA@AB@FAFA@C@A@@@AB@@@B@BADA@AB@@@BB"],
                    ["@@@@B@@@@@@A@@@@AA@@A@@@@B@@@@@B@@@@@BB@@A"]
                ],
                "encodeOffsets": [
                    [
                        [123461, 37201]
                    ],
                    [
                        [123207, 37056]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370211",
            "properties": {
                "name": "黄岛区",
                "cp": [119.995518, 35.875138],
                "childNum": 14
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@@D@@BB@@B@B@DCDABA@A@A@@@AA@AAA@AAA@A@A@A@@B@B@B@B@B@B"],
                    ["@@A@@@@B@@@@@@B@B@@@@@@@@AA@@@"],
                    ["@@B@@@@@B@@@@AB@@A@@@@@@A@@@@@@@A@@@@B@@@@@@AA@@A@@@@@A@@B@@B@@B@@@@B@"],
                    ["@@DA@@@@BA@A@@AA@@A@A@@@@@A@@@AB@@AB@B@@@@BB@@B@@@B@"],
                    ["@@@BB@@@BB@@@@@@B@@@@A@@@C@@@A@@@@AA@@A@@@@@@B@@@@A@@@@@A@@B@@@@@BB@"],
                    ["@@@@@@@@@B@@@@@@@@@B@@@@B@@@@@@A@@B@@@@A@@A@@@@@@@@@@@A@@@"],
                    ["@@@@@@@@@@B@@@@@@@@A@@@@@@@A@@@@@@@@@@@@A@@@@@@@@B@@@@@B@@@@@@@@@@"],
                    ["@@B@@BB@@@@A@@@@@A@@@@AA@@@@A@@B@@@@@@@B"],
                    ["@@LPHHDF@HDDDDF@FBD@BC@CAC@E@EBEDMBCFEDCDE@CAEGGGCUIGAE@IDEDCHAF@HBLBDBD"],
                    ["@@BB@DBBBBB@DB@@@DB@@BB@BA@@@A@@BA@@@A@AA@AAAA@CA@@@C@AA@@@A@@BC@A@AA@AAA@A@@BA@@BA@@B@@@B@BBBB@@@@B"],
                    ["@@@@@@BB@@@@B@@@@AA@@A@@@A@@AA@AA@@@@AA@@B@@@B@@AB@@@B@BBD@@@@@@B@@A@@BA"],
                    ["@@AA@A@AA@AA@BA@AB@B@@A@AA@AB@BAFCAA@@CBCAAA@ABA@AA@C@AAACCCCAC@E@C@CBADABABANABA@C@AA@@@CLM@@@AAAKE@@CAC@GFC@AAAIAMIMKEUEKAKBGFEBE@C@IEECGIEEACMWIOQcKSGO@I@E@CBADEFEB@BAB@@@BA@A@AHIDCBE@E@AACACEAAAAC@C@G@A@AACE@AA@A@C@I@A@CA@A@ABA@AAAAMcGK@A@E@CAAAACACCCGCACBAFCBIDKCKEIAGBBHDLDJEHIL@@C@A@CC@@A@@@A@A@@@CD@B@@@BDH@F@BCDOPCBEBG@KBKBE@E@C@ECEAACEIACAK@E@E@CBA@@B@B@B@@ABABEBCDAB@F@F@FAFBH@DBD@@@BAB@DE@G@IAGEIIEaMGCEECEAEAKAAECAACG@EAMBCDCVIFEDC@E@CEQCCGAGAQ@G@GCGEIGY[ECE@E@EDUREFGBE@GAKIC@CBAD@FBJ@FAHAH@JABCBC@CCACCCACICICCCAAAAAAAAAAA@AA@A@AAABAFA@AA@E@A@EE@@CAAA@CDA@KDCHKACEAGCRYAAIEICG@GHEJE@IKAAA@CAC@A@ABCBINEBCDAv@FEBQ@S@KAKCsICI@SBGAC@E@C@MHED@@C@CBABABABAB@DABA@K@E@IJA@EAAA@IEKCCKCC@CFAJ@BGDC@KGCCCCG@CAA@BEBEAAEBE@ADCDC@AAC@EFA@E@KAE@GCE@C@ADAB@BDD@FANABKBOHGFAD@F@J@DBDLJABCBCBABBBF@@@BLFDABAB@D@BDDBDATBN@H@FGHGFABAH@D@B@@@@@BA@A@A@@BBB@BAB@B@@@@@BFB@BBDBF@DBD@BCBBBBD@FADCF@D@@BBDB@DABFFB@B@@AB@@CBKDABAB@BD@@B@HADB@BBBFBFB@@BA@@@CB@H@DAD@DAF@B@@ADCBADA@@@@AA@ADAB@JB@@FEB@B@BBB@FA@@BB@BB@FA@@@BBBB@B@FALA@C@@BABAD@DBDFNFF@FEDCD@BB@HFJ@BAHMLGDKPGLEDCBKBCBAB@FBD@JDF@B@FBHFDB@J@D@F@DBBB@FBDDFDD@DADEDGHADBLBHBFBB@@@@D@DAB@@@@B@BDD@@D@B@B@@B@B@BB@BDBDFH@BB@FB@@@@ABA@A@AD@D@BDBF@B@BBBDB@F@DDFDFDBBF@F@FAFCFAF@F@F@FBBD@B@BCB@BBBDBFDBDBBFDBBAFBBB@F@B@BBBB@@FBD@B@@A@@@@B@BB@@B@B@@A@AB@BABCD@HC@ADE@@FAB@FDD@B@@BBB@D@B@@ABGB@BB@@@B@@@@BAB@@B@B@DAFCB@@@DD@BB@B@@ABA@AB@B@BB@BCFBBBBBF@DAFADAD@JADAH@B@@B@@@@BAFABA@ABAB@DAB@BA@@@A@C@EHABCJ@F@@BBB@@BCHA@A@@B@B@BBB@BABA@@@A@AAAA@@A@BD@BA@AACAAABA@A@AA@ADA@A@AA@AC@@BBR@@BD@B@BEBEHBBDBBB@BGPOVG^AJDPAJ@DBDDBAFC@AFAA@@A@CN@BLJJBHD@@BJHB@@LBAFHBAB@@@D@BBB@@BD@@BBB@BBD@B@@BB@FABC@CFBJ@@A@@@BBEDBBABCBIDEDABBD@D@@A@CAABCH@HDJ@B@BEHA@A@CBEDBJBDABCPBDLAD@BB@@HBDJLB@@ADAABFBDCDCFBNCHAFBADJDDBBH@BDFBBEDFFA@ACE@@B@DFHBBD@BA@@B@HBLFBCD@B@FBNHBDNBLADA@EFEDAD@DA@A@@BCAABCFBB@BD@@DBBBA@@BDBB@B@NC@FHDBABBNFDCHABBBHTFNAD@H@LD@BBBNHD@H@PDHDFBBE@ADGDCD@HHDBBDA@@DB@@BADB@D@AH@B@@B@AB@@AFA@AFED@BDBHABCB@BABAACD@LBDCB@D@@DBDFBDA@@B@@B@B@@DB@B@@@@BBB@@@B@@BAD@D@B@@E@@@BB@BBB@D@@@@A@@A@BAD@@@@@D@@@@@@@BA@@B@@@@@@@@A@@@@@EDG@JDBBBA@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@BA@@@@@@@@@FAD@B@@@B@@@@@B@@B@@B@@@B@@@@@@BBFA@B@@@@@B@B@D@B@B@@A@A@@@@@@@A@@@A@A@@@@DAB@@BB@B@B@B@BBB@@@B@B@B@@@B@@BBB@BBD@DBB@BAD@B@BA@@DABC@@BA@@BAB@BAB@B@D@D@BBDBDBD@DBF@FAD@BAHEB@BA@@BBB@B@D@DDB@@@BBB@@@D@B@@@B@DAB@BADAB@BABABADA@@@BB@FC@@@AD@@@BA@@@@HAB@DAD@F@D@HAN[BC@M@CDCD@`CLALAHCHELSD@B@DAD@HEDA@A@AAA@A@ABA@@JGDAHCH@LA@HAFAFCBC@EAIAEAACAM@CAAABC@ABAB@@@B@BADA@@@A@ACC@A@A@A@A@AAA@@OKA@@CBA@AACiaCAA@EBCADCDAF@J@FBHDLHPJPLTNPHJBPQ@CIGGIO[@CBA@AAEACBCBAD@D@DBBD@B@D@D@B@BFBB@BBADAH@B@@HFB@B@FIBCB@BALDDB@BEJAD@DBBDBJFDBB@FHBBDBDAJAFAD@HAD@DA@ABAAA@A@AHEBCBAW}CEGASCCAE@UBI@E@GAICKGAAAAACAG@CACAAA@A@E@A@A@A@AAGGEICGCCGKCCAACAGACACCEEACACAGACB@@C@ABCBA@AAAEIAA[ECAC@GBI@I@ABA@@B@B@BDFDDBB@H@FDDBBBBBDFDDBDD@DBDBFBDB@@BB@B@B@FBB@@B@BAB@B@FBB@BB@FBFAD@D@FDDBDFBBAD@DABA@ABC@_IYKAAAAAACI@ACEC@@A"],
                    ["@@B@@@@AB@@@BA@@@AA@BAA@AA@AA@@@A@@BA@@B@@@B@BB@@B@@@@@B@@B@"],
                    ["@@BB@BDBBBFGBC@CBA@AA@@A@A@ABCA@@CA@@BAD@@A@AB@B@BA@@@@BABAB@B@@@@AB@B@@@@@@@B"]
                ],
                "encodeOffsets": [
                    [
                        [123200, 36808]
                    ],
                    [
                        [123214, 36806]
                    ],
                    [
                        [123219, 36807]
                    ],
                    [
                        [123213, 36806]
                    ],
                    [
                        [123044, 36772]
                    ],
                    [
                        [123090, 36755]
                    ],
                    [
                        [123091, 36753]
                    ],
                    [
                        [123066, 36651]
                    ],
                    [
                        [123043, 36624]
                    ],
                    [
                        [122805, 36485]
                    ],
                    [
                        [122719, 36470]
                    ],
                    [
                        [123055, 36787]
                    ],
                    [
                        [123066, 36798]
                    ],
                    [
                        [122609, 36451]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370281",
            "properties": {
                "name": "胶州市",
                "cp": [120.006202, 36.285878],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@DBBD@@@NB@@AD@APB@JB@DBDFD@FA@@@@HFFB@F@LD@B@BBDFINEHBB@DDD@HEHAF@B@B@@BB@BBB@@AB@B@@AB@B@@@B@B@B@@@B@BA@@BA@@BBB@@@B@B@@@B@BAB@@A@@@E@EBC@ABAB@DABAJBJEF@F@LFDFNFF@H@ACF@J@PFDB@DJABA@@@CB@BBDBJADAF@B@ADBDB@@D@@ADHABCHAADDJHDBAD@DB@D@D@BIFBFEHCHBDBFB@BDDH@BCDEAG@CFEJCJAJABA@A@AFDHHHF@DD@BB@B@@B@@@B@B@@@B@@@B@@AF@DAD@B@@BBB@B@D@B@@@B@B@B@@BB@BB@@BB@@@B@@@B@@@@@@@B@@@B@@@B@B@@BBB@@BB@@B@@@B@B@@@@@@@@@B@@@B@@@D@B@B@B@@@BBBB@@B@@BBB@@BB@@BBB@@BB@@BBFFFDDBBDB@@BBB@@@BB@@B@@@D@@BB@B@@B@BBB@@@B@B@@@BAB@B@@@B@B@BD@@@B@@@B@B@@@B@@BB@@BBB@@@BBB@B@@@BBB@@@BBB@B@@@BBB@@@B@B@BB@@B@B@@BB@B@B@@B@@JBDB@BAD@D@BBB@DBB@BBB@@BB@@BB@@BB@B@@@B@@@B@@@B@D@B@BB@@B@@BB@@@BAB@@AB@@AB@B@@@B@@@BB@@B@B@@BB@@@B@BBB@B@@@B@BB@@B@B@D@BADABNFAL@@FBEJBBBBHBVBBAJBB@F@DCFABC@@THAHABA@AH@DCBEDC@EF@@@BA@@BA@A@@@C@AB@@AHAJBB@D@HB@@@@@@@F@@@@@JB@DB@@BB@@B@@@B@@@B@B@@BB@@B@B@B@@BB@@BBBAD@B@B@BB@BBDD@@BDBB@@@BBBB@@@@BBB@B@@BA@A@@BAB@B@@@BBB@BB@@BB@B@@@@@@B@@@B@B@@@D@B@@@B@B@BB@@B@B@@B`BN@F@BA@CFAJBF@BB@DAFB@B@B@D@B@BBAF@J@@B@BBB@B@@@@B@@@BA@@@A@ABBB@@@BA@@@A@AAEDA@@B@@CNBDB@BB@@@BBB@@DBDBB@BBBB@B@B@BDB@B@BB@BADADCFCFCBC@@@@@@B@@@@B@@@@@@BAB@@@@@@@@@BB@@@@BB@@@@BB@@@@@@B@@@@@@@B@@@@@@BAB@BA@B@BBDBBB@@BC@A@@B@@@B@B@@@@@@@@@BA@A@@@@B@@@@@@AB@@@BA@@@@@@@@BADAB@@A@@@A@@B@@@B@@A@C@@@@B@F@D@@@@@B@@@@@BA@@@B@B@B@B@@B@@@@@B@B@@@@B@B@B@@@@@@BB@@B@B@@@BBB@B@@@H@DBB@@@@D@@@@@@@BB@B@@@@@B@ABD@@@@AB@@@B@B@B@BA@@@@DAD@D@B@B@B@DAB@@@B@@@B@B@@@@@@@@AF@B@@@B@@@@@BA@B@@@@@B@@B@@@@@@@@BBB@@B@@A@A@@@A@@B@@@@@@@@@B@@@@@@@@@@@B@@B@@@A@A@@B@@@B@B@@@@@@B@@B@@@@B@@@DB@@@@BB@DBB@BBB@@@B@BB@B@@B@@@F@B@@@@@@@@CAA@A@@@A@@@@D@N@B@@@@@@A@A@AA@@@B@B@H@LA@@D@B@@@@@B@B@@@@@DAB@B@@@@@B@B@@@@@@@BA@@@@B@@@@A@AB@B@B@@@@@@A@@B@D@@A@@@@@ABCB@@@@A@CC@IDCBC@C@ACAC@A@E@G@AAAAACAGAOCCAACAA@E@G@E@@B@DAD@DA@@B@@@@@B@B@D@@@B@B@D@B@B@B@B@B@B@B@B@@@@@BA@@B@@@@@@A@E@ABA@@D@B@@MA@@@A@A@@AG@@@@@@A@AA@@AA@@@@AC@@@CA@A@@A@AA@@B@@A@@BA@@@A@ABG@AEGAAAAAADE@EDIDI@A@@@@BAFCB@B@FA@@@A@@B@@@@@@@@BB@@@@@@@B@@A@@@@B@@D@@D@@A@@@A@AD@B@BAB@@@@@B@@B@@B@@A@@@@@A@ALAFA@AB@@A@@BA@@A@A@@A@@@@A@A@@@@@@AB@@AB@B@@AHAF@BA@@B@@@B@B@@@B@B@@A@ABCDAB@L@B@BA@@FCFAB@@AAA@@AGAAAAAA@CBC@E@C@AAA@@@@@@CB@@A@@@A@@@A@A@@@@@A@@@@A@C@A@@@@A@@@BE@@A@AAA@A@@@A@@@@@@AA@@@@@@A@@BC@A@@A@A@@@C@@@C@@A@A@@@A@AA@AA@@A@AA@@@@@@@A@@@@BA@A@A@@@@A@AA@@A@A@AAC@@@@@@A@@@@@A@@A@AAA@C@AAA@@AB@@A@@@A@@@A@@@AB@@A@@AAAA@@@AA@@AA@@AA@@@@AA@C@A@A@@A@@A@AA@@A@@@A@@AA@@@A@@@@A@@@ABA@A@@@@@A@@@@A@@@A@C@EAE@A@@@A@@@A@AB@@@@@A@@@@@@@@@A@@@@@@B@@@@A@@@@@@AA@@@@@@@A@@@@C@A@A@A@AA@@@@@@@AB@@A@@@@@@@AA@A@A@AA@@@@BCA@AAA@AA@@A@A@AA@@@@A@AAA@@@@@@BA@@@@@AA@@@@A@C@@@@@CAA@A@AAA@A@A@@@@A@@A@@@@@@A@@@@@A@@@@@@@@A@@AA@A@A@BAFEB@B@B@@@@B@@B@B@@@@@@@@@@A@@@@@@@@@@A@A@@@AA@@@@@@@@BA@@@@@@B@@@B@@@@@@@@@B@@@@@@@@A@@@@@A@@@A@@@@@A@@@@@@@@A@@@A@A@BA@A@C@AAAAAAAABABA@CB@BAB@@@@@B@@@@@B@@@@@BB@@@@@@B@@@@@@@B@@@@@@A@@@@@@@A@@@@@@@@A@@@@AA@@@@@A@A@@@A@@@@@AA@A@AAAAA@@A@A@@@ABC@@@A@@@A@@@@@@BA@@@A@@@@@A@@@@@@B@@@@A@@@@@@@A@A@@@A@@BA@@@A@@@A@@B@@B@@B@@A@@@@@@@A@@@A@ABA@@@A@@@A@@@A@A@@@A@A@A@A@@@@@A@@@A@@A@CBA@ABA@A@@@A@@A@A@ADCBCFCB@D@FBDBD@B@@ABA@A@C@@@AAAA@GACAAAAA@C@ABABA@AD@D@B@D@DBDBB@DADADC@CBA@AAA@A@@AAA@A@C@EBC@A@AAC@@ACC@A@A@@@ABABAD@DAJCDARSD}KQOIWAOAGBC@E@C@CBA@GB@@@@AB@@C@@B@@EDA@@A@@CBABABABA@CBABA@CBA@@@A@C@@@A@AA@@A@CCC@A@A@AA@@ABA@GFABC@EBE@CAC@CACAAAC@C@A@A@ABA@AB@@AB@@ADCB@@ABA@C@ABA@CAC@AAA@AA@@@A@@@A@A@A@@AA@A@A@A@AAA@@BA@C@@B@B@@@B@@@@@@@B@B@@@@A@A@C@A@A@@@@@AEBAA@@@@@@@A@@@AA@@@@A@@@@@A@@@ABC@E@@@@@@@@AB@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@ABAAICH@FC@@@@B@@@@@@@@@@AB@@A@@@@@@@C@@@@BC@A@BB@@@@@@CAA@AAA@@F@@@@A@CBC@AA@@@A@AA@@@@@ACA@@@A@AA@@@CBEAAC@CC@A@CDKAC@BDABABA@ADGBCA@AFCBEB@BE@@BAA@@@@ABGC@A@BC@AA@@CB@ACCAGGC@CDCH@BAFEAGCOCG@C@MGAA@AKCG@C@MBSEAGAAGBCDMEAAABGC@EMDA@A@CA@AB@AACA@@ACA@EAADBBAD@@@BCBC@CBEF@FCBKBMAACMGEAA@C@ADKEGAA@@@ABC@AAEG@C@AF@BDB@EEFCAACE@AAGCAICBCEAGBMDEACDCDEABACB@BA@IKAC@GA@@ABCCKOAADCBIACAAF@D@BGBAFA@I@GCG@ADBB@D@BC@C@AACBCFAJADABCAAF@A@@@BI@EA@DADEB@D@@@@@@@B@@A@@BABABA@ABA@@BAA@BA@BB@BBB@B@@ABA@ABA@A@A@A@@@A@A@A@A@@@AAACACA@AB@B@@BB@@@BB@ABACODGDQNCBAE@GI@@@C@@BD@@B@@E@@BDB@BEAGBABBDG@O@ABABC@U@AH@BBBCNB@@BDBCJ@HBDDBPB@BJBHDJDAHFBAFC@CDAF@B@D@BEDCDCJABA@@DDDB@@ABAFB@BA@@LBBDJ@BD@@B"],
                "encodeOffsets": [
                    [122527, 37013]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370282",
            "properties": {
                "name": "即墨市",
                "cp": [120.447352, 36.390847],
                "childNum": 12
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    ["@@BAB@BCBCAA@AAA@@A@C@C@@@AB@@BD@D@BBBDB"],
                    ["@@@AAAA@A@AB@@A@A@C@AACAA@EAA@ABA@@BB@@B@@@B@B@B@@@BB@@BB@BA@@B@B@BAD@BBB@B@@@B@BA@@B@B@B@@ABA@@@@"],
                    ["@@@@@@B@@A@@@@@@B@@@@@@@@@@A@@@@B@@@@A@@@@@AA@@@@@A@@@@BAB@@@@@@A@@@@B@@@@@B@@@@B@@@"],
                    ["@@B@B@@A@@@A@@@ABA@@@A@A@@@AB@@A@@AAA@@@E@A@@B@BAB@B@BBB@@@B@B@BB@@@B@"],
                    ["@@C@EDEDC@E@ECA@C@E@A@CACAA@IBC@E@C@ABCD@D@BBBD@BBBBBDD@H@JADBB@@BAD@D@BD@D@FAJCDALMB@BADBB@D@BA@C@CAAAAC@"],
                    ["@@@@@@@@B@@A@@@@@@@A@@A@@@@@A@@@@@@@@@AB@@@@@@@B@@@@B@B@"],
                    ["@@BAB@BAB@@A@A@AA@A@A@A@AB@BABABA@A@@B@BB@B@B@B@BA"],
                    ["@@BB@@@@B@B@@ABA@A@@@AA@AA@@AA@AA@@@A@AB@B@@@@BB@@@@BB@B@B"],
                    ["@@@@B@B@@@B@B@@@BA@A@@A@@AA@@@A@AB@@A@@BA@A@@@@@@@@@@BB@B@"],
                    ["@@DAB@DABCBA@AAAAAA@A@A@@BA@@@A@A@A@AB@B@B@B@BBBB@BB"],
                    ["@@@@B@B@@@@@BA@A@@A@@A@@@@@BA@@@@B@@@@A@@@@B"],
                    ["@@@B@DF@H@@EAE@@B@@@B@@@@@@@@A@@B@@C@@@@@@@@@AB@@@B@@@B@@@@@B@@@@@@@@B@@@@@B@@@@B@B@B@F@@@B@@@@@@A@@@@@@@@B@B@B@D@@@@@@B@@@@@B@@@B@@F@FAB@@B@@@@@@@@B@@@@@@@@B@@@@A@@@@@@@@B@@@@B@@@@@@B@B@@@B@@@@BA@@@B@@@@@B@B@@@@F@H@@B@@@@@@@B@@@@@@B@@@@@B@@@@@@@@@@@@@@@@B@@@B@@@B@@B@BB@@@@@@BB@@BB@@@@@@@@@@B@@@@@@@B@@B@B@@@@@B@@@@@@@@@@@@B@@@B@@@@@@@@BB@@@@@@B@@@@@@@@@@@@B@@@@@@AB@B@F@D@@@@@B@B@B@@CB@BAB@BA@@B@@A@@D@@C@@@@BB@@@@@@B@BA@A@@AA@CB@B@BBB@DBB@B@B@B@@@D@@@B@@A@A@@@C@A@@B@AAA@A@A@@AA@A@B@BAF@BA@A@ADA@@BADA@C@@@AB@@A@AB@@AB@AAC@BA@@@A@@AA@@@AA@A@AA@@AC@C@EB@DA@A@A@AB@B@@A@C@A@A@C@AAAD@@A@CB@FA@@F@B@@BB@@@@AH@D@@BB@@B@@BB@B@B@@D@@@D@@BABFBVB@@@FAH@FBBD@B@DBB@B@BD@B@@ADA@@BCB@@@B@B@@B@B@BBDABA@AB@B@@FBBD@@K@@BA@ABA@AB@@AB@BA@C@A@@B@BADB@@@BD@B@B@DBB@@@@AB@@@FC@@@A@@B@B@@CD@@@B@B@B@@BB@@BB@BD@B@BB@B@BB@@B@@@B@B@@@B@@A@AB@B@F@D@@CB@@A@E@CBA@@@A@A@C@A@@DCB@@BB@D@@@BD@@B@@@BBB@FBBBB@DAB@BBB@@BD@B@BBB@DBBB@@BB@@@@BD@BB@BAB@B@B@@BBB@BB@@@BAB@BBB@@@B@BBBAB@@@B@@BDBDB@@DDD@BBBBB@@D@@D@F@@@B@B@B@F@B@@DABA@@D@@A@AB@DABB@BB@B@@BB@@D@@@@@D@BDDB@@BJ@@AB@FB@D@F@FBFBD@@BH@B@BAD@DADCBAA@E@@@@C@@BABAB@BB@@@@FBCB@@@@D@B@BABAB@B@BB@@B@BABAB@DAD@HKBABCRDBEB@B@D@BAJGB@@C@AFE@@AA@A@A@@BABBD@B@DCÂnDBDAJCNGRCN@HENW@EAGDEVKLIF@PFBBDAFAHGFAFAbCD@FBD@FAHCFCFCDCRSDEACECMOEEQQOWACBAHK@AACEE@@@C@ATQBADCBC@C@CCGACCCCCEACAC@CAAAAG@AAA@AACC@AAEACAEBAFEHABA@W@CAAAAAAAC@EAC@@CAA@CBCDAJGBCBC@CBK@CBABAJGD@B@DBDBD@B@BC@A@EAAAAKGC@C@A@AB@BBBBB@B@B@@@@GFAB@@A@@A@@AAKIOMGGEKCEAACC@@AABABAB@BABABEBCAC@AAACCEACAE@C@AACASG@B@BDBDB@B@BABYHCBCBCBADCF@B@D@H@BAFEJ@DBDBBRNBBBD@H@DADCBUNCDC@IBAB@B@BBBBBBBBDB`AFADCDEBGBG@ÍGA@ACACBGBIBGDEBC@CCIECKAI@KBGBCAECEEAEAA@C@E@CAECAEBGCKECC@@@A@AACAAEEGECACAACACAEBE@C@EDE@CBABABAB@LCFCDABAFGBABADBBBBBDAHCBA@CBIBCBCDCHGDCBC@ABE@@BCFA@AB@@AAA@@AAA@A@A@ABAA@@@C@AAA@AA@@@A@A@EDA@MDODI@G@GAKCE@E@C@C@CDCBE@IAE@CBA@AB@BEDA@EAMS@@@AA@A@M@C@A@A@A@@@A@A@A@E@@BCBAD@@@B@@@D@B@BAD@B@B@@@@B@BBAD@B@@BB@@@B@B@@@@AAA@AAA@A@ABA@@BA@AB@@@@AAAA@@AC@@AA@@@@A@@@@@@AA@@A@@@A@@@@@A@C@A@M@AA@A@@@EBABABCBCB@@SAG@CBC@A@ABA@CBC@@AC@AA@AA@@@A@@@A@A@A@ABEB@@C@CACDAA@@A@@BCBABA@@@A@@B@@@B@DEBEBA@@BEBEDCC@@@AA@@@BA@@@A@@@@BA@@@@B@@A@@@@@@@A@@@C@@B@@AA@@A@@@@A@B@@@@@@@@@DBB@@A@AA@AAA@@@@@@@AA@@@A@@@A@@@@@@@@@@C@@@@@@@@@ABA@A@@@AA@@A@C@CBABC@@BA@@B@B@@@B@B@@@BABA@AB@@@@@@@BA@A@@B@@@B@@@B@@@B@@A@@@AAABA@C@A@A@@@A@@AA@BA@@@AB@@@@@@AA@A@A@@B@@AAA@@A@@@@A@@@@B@B@@@BA@A@A@@@A@AA@@@@@A@AA@@A@@D@DA@@@AA@ACA@C@@@C@A@@A@@A@A@AA@B@@ABA@A@@@A@@@A@@@A@A@A@@@A@A@@@@@@B@@A@@@@@@@@A@@@@@@AA@@@@A@@@@@@@C@@@@@@A@A@@@@B@@@@@@A@@@@A@A@A@@@@@A@@@A@@@@@@@@@G@@B@@AB@@AB@@A@A@A@AAA@@@@B@@@@AB@@A@@B@BBBBD@@@@@@BBA@@@@B@@BB@@A@A@@B@@@BB@@A@@@BAB@@@B@@AA@@A@@@@BB@@B@@@@BA@@BB@@@@@@A@@@@BA@@@@AA@@@A@@@@@BDA@A@@@@A@@@@@@@A@@@@@@AA@DA@@B@@BB@@A@@@@A@@@@A@@B@BB@@@@B@@@@@@A@@@@AAC@@@AABA@@@AAA@@@AA@AAACB@@@@@@AA@AA@AA@@A@ADEE@@A@@@@@@BA@@@@@A@@@A@A@@@@@@@C@CB@@@@CB@@@@@@CB@@@@@@@@@@CBEDCB@@@@C@@B@@@@@@@@@@@@@@AA@B@@IC@@@@@@@@@@@@A@A@@DAB@B@F@@@@@@@D@BA@C@A@EA@@@@@@@B@@A@@@@@AB@B@@A@@@A@@B@@B@@@@@B@@@@@@@@BB@@@C@@B@@@@@B@D@B@@A@ED@DC@@@@@@A@@AAABAAABA@@@@A@@@@@AAA@@@A@@@@AABA@@@AA@@@@BAA@A@A@@B@@A@@@@@C@@BA@@@B@@@@BA@@B@B@@BDA@@@@@@@@@@@CB@B@B@@@@@@AB@D@BA@@AGAECECEAA@@@@AACCACCAAAAAA@AAA@CBCB@@A@@@C@A@AA@AAEAA@@AAACAA@@A@@@A@@@@@AA@@@A@@@@CB@@@@@@A@@@@@@BA@@B@@ABA@@A@@@A@C@C@A@@@@@@B@@@@A@@@ACAE@C@A@@@AB@BAD@BA@@@B@@D@B@@C@@B@@B@B@B@@B@B@@A@A@ABA@@@C@A@A@A@@@EFIHAB@D@@@B@B@@@B@@@@@@@@@@@@@@@PG@@@AA@@AB@@@@@@@@@@A@@@@@@@@@@@@@C@@@@@@@@@@@@@A@@@A@A@A@@@EB@@@BC@@@A@A@@@@@@@BD@@A@@@@AA@@AABA@@A@@A@A@A@@BC@@@@A@@@@@@@@C@@@@A@AGB@@E@@@@@@B@B@@@@AA@A@@A@A@@@BEA@BC@A@A@@B@@@@EABG@@@@D@@@@AB@@@@@A@A@@A@A@@@@@@BA@@@@@AB@@A@A@A@@@ABB@@BABA@@B@@@B@@@BAB@@@@A@A@BBC@AB@@@@@BE@AJ@@ABA@@B@B@B@BC@AAG@@@@@@@A@@@CB@DA@@@@@@@A@@@KAA@@B@@@@@@@@@@AF@@@BA@@D@B@@AA@@A@A@@B@B@@C@A@ABC@@@@@B@D@B@@@B@B@@@@@B@@B@DA@@D@@@B@@AB@B@B@@@BB@@@BB@@@B@@AB@@A@@@@BAD@D@@@BA@@@@@@B@@@D@BA@@A@@A@C@A@@@@@@BA@A@C@@@@@@@@@@C@A@@@@A@KDGBKDE@@B@N@AA@CAC@AAAAAAC@@A@A@@BAB@BA@AB@AE@A@ABA@C@A@G@@@C@A@C@A@ABA@ABCBA@AAAAAACCA@AA@EBED@@ABA@K@A@CBAD@B@BA@A@@@A@A@@@A@@@ABE@GB@BA@A@@BA@@B@@@@B@B@@@@@@BB@B@@@AB@@@BA@@BEBKB@B@B@@@@@BA@@@@AA@@@@@A@ABA@C@@B@B@@@BC@@@@CA@@@@@@BA@@@@@@@A@@A@@@@@@A@@@@B@@EBA@A@EDAB@@@@@BCJCJ@FCFBBBBBBFH@BAH@B@B@@AB@@@BA@@@BBB@@@@BDB@@D@@B@@B@@BB@@B@B@@@@H@@BB@B@@@B@@NA@C@@@AB@B@F@B@@@@A@@@AB@@@@A@A@A@A@A@A@A@A@C@A@A@@@C@A@A@@@@@A@@@CBC@CBA@@@@F@H@FBBBDDBPDHBDBBBBB@B@H@F@BBDBDD@D@DAJCD@B@D@@@DB@@BBBD@BBD@B@DABABAB@@A@A@CBA@A@@BA@AB@B@@@B@D@B@D@B@B@B@@AB@@GFEFCHAD@DBFDDDF@BAD@BADEBGFEDCBABADCD@@@BA@@B@@@B@B@@@B@@DFFHFFBB@@BB@B@@@B@@@B@@@B@B@@BB@@@BBDBD@B@B@D@D@D@BB@@BB@BB@BB@@BB@@BBB@BB@@BB@B@@@BAB@@ABA@@B@B@BB@@BB@@BBB@@BB@B@@BB@B@BB@@B@B@@@B@B@B@@@B@B@@@B@B@@BB@B@BB@@BB@B@@BB@@BBB@@@B@BBB@@@BBB@BBB@B@@@BBB@@@BBB@@BB@@B@@@B@JCF@DAFBF@BB@BBBB@@B@B@DFBB@@BDFBBBB@D@@@B@@@B@B@B@@@B@B@@BB@B@BB@@BB@BB@@BB@HD@BD@B@D@FANCFAHIDC@AFADADAD@D@@@@B@@@@@B@@@@@@@B@@B@@@@B@@B@@@@@@@B@@@@@B@@@BAB@B@@A@@@@@@B@@@@@@@@@B@@@@AB@@@@@@@B@@@@@@A@@@@B@F@@B@@@@@@@B@@@@B@@@@@@@BB@@@@@@@A@@@@B@@@@@@AB@DAF@H@FAB@@BD@@@B@BB@@@@@B@@AB@@@@@@@B@@B@B@@@@B@@@@B@BAB@B@B@@@FB@B@@@@@@@@BB@@@B@@@@@B@A@@@@@@@@@@B@@@@A@@B@@@@@B@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@B@@@@@B@@@@BB@@@@@@@B@@@@@@@@A@@@@AED@@@BBB@B@B@@BB@@@B@A@@@@@@@@BB@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@@@@@@B@@@B@@@@@@@@@B@@BA@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@BA@@@@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@A@@@@@A@@@@@C@@@@@A@@@@B@@@@ABBFAD@D@F@D@FAD@DA@@@@@BB@@@@@B@@@@B@@@B@BBD@@@@@@@@@B@@B@AB@@BB@B@B@BF@BAB@@@B@@@B@@A@@BA@@C@AE@@B@@AAC@@ACCCB@DAB@JA@@FA@@@BBB@@@BB@@BB@@B@BB@@B@@BB@@BBB@@@BBB@@@D@B@@@B@B@@@B@BBB@@@BBB@@@B@@@@@B@@@@@@@@@@A@@@A@@@@@@B@@@@@@@@A@@@A@@@@H@@AB@@@@@BA@@@@@@@@A@@@@@AAFA@@@@B@@@@@@AF@JC@A@@B@@@@@B@@B@@@AB@@@@@@A@A@BBABBB@B@BB@@D@B@B@B@B@@@D@FB@@D@L@D@D@D@@A@@@CB@B@B@"]
                ],
                "encodeOffsets": [
                    [
                        [123969, 37424]
                    ],
                    [
                        [123909, 37365]
                    ],
                    [
                        [123856, 37328]
                    ],
                    [
                        [123919, 37315]
                    ],
                    [
                        [123894, 37288]
                    ],
                    [
                        [123919, 37299]
                    ],
                    [
                        [123842, 37286]
                    ],
                    [
                        [123835, 37281]
                    ],
                    [
                        [123800, 37266]
                    ],
                    [
                        [123759, 37249]
                    ],
                    [
                        [123735, 37253]
                    ],
                    [
                        [123344, 37493]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370283",
            "properties": {
                "name": "平度市",
                "cp": [119.959012, 36.788828],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@@@B@@@@A@@BA@@B@@@B@@@@@B@@@B@B@BBB@@AB@@@B@@@B@@@@@B@B@@@BBB@@@@BBB@BB@B@BBB@DA@@@AB@DADABA@A@A@A@@BAB@@A@A@AAA@@AA@@@AB@D@BA@AB@B@B@D@B@D@B@BA@BB@@@ABBBBB@B@@BB@@B@B@@@D@D@B@B@BB@@B@B@@BDBB@B@B@B@B@B@D@@@B@BB@@B@B@@@BA@@@@B@FA@@B@@@@@BAB@B@@AB@@AB@@BB@@@BABA@A@AB@@AB@B@BBBA@@BA@@@@A@@A@A@@BA@@A@@@AA@@A@@B@@@@A@@@A@@@@A@@@@BA@A@@@@AAAB@@@@A@ABA@AABAB@CA@@A@@@@@@@A@A@@@@@A@@A@@A@@@A@@A@A@@A@@@A@A@A@A@@BAB@@@AA@@AAA@A@AA@AA@@@A@@BA@@@AA@@A@AB@BADADABABABAB@@A@@B@B@B@@@B@B@B@D@B@BAB@BBB@@BB@BB@@F@AB@@@BAB@@BBB@B@@@D@B@@@B@@A@@@A@@BAB@@@@AB@@AB@B@BB@@B@@@B@@@@@D@@@@B@@B@@ABA@@BBB@B@B@BAB@B@B@@@AA@@@A@@@@BA@@B@@A@@@@@@@AA@@@@AA@@@C@AA@@A@@AA@@@@AA@@@@@A@@@@B@AA@@@A@@@A@@A@@@@A@@@@@@@@@A@@@@@@@A@@@@A@@@@A@@@@A@@@@@@@AA@@@@A@@A@@@A@@A@@A@@A@@A@@@@A@@@A@@AA@A@@B@@A@@BA@@@@B@@@BABABABA@@@@@A@@@@@AB@DAB@@A@@@@@@BA@A@@@@B@BA@@@@@A@@@ADA@@@A@@BA@@@@@@@@@A@@@@@A@A@@@A@@@@@@@A@@@@@@@@@A@@A@B@AAB@@A@@@@@A@@AA@@@@AAEGAAA@@A@AA@@AAAA@@A@@A@@A@@A@@@@A@@@A@@@AAA@@@@A@@A@@@AAA@A@@@AA@@A@@@A@@AEACAAA@@@@@@@@AA@AA@AA@@@@@@@@@A@@@@@AAA@@@@@A@@@A@CAA@@@A@AAEAA@A@@AA@AAAA@A@@@AAC@A@@BA@@BA@A@@AA@@BAB@@AB@@@B@@@B@@@BAB@BCBA@AB@BA@@BABABA@@@A@A@@BA@A@A@@@@@A@@@@@AA@@A@@A@@A@@A@@AAAACAC@AAAAA@A@CAE@A@C@C@A@AAA@A@CAC@AAC@EAC@AAC@A@@@A@A@A@A@@@@@@AA@A@@@@@@@@@@@@@A@@@AAA@AAA@@CIAA@AAA@@BA@@@AA@@AAA@A@C@A@A@AAA@AAA@ABA@AAA@AAA@@AAAC@@@AA@@AAA@@AA@A@@@AAA@@@A@@AA@AAAA@@A@A@C@I@IBIBG@A@@@A@@@@BA@ABC@@BA@@@@B@@A@A@@@A@@AA@@@AA@BA@@@A@A@ABA@AB@@@BA@@AA@@BABAB@@@@AB@@A@A@@@@@@@A@@@@@@@A@@@@@@BA@@@A@@@AB@@A@@AA@@@A@A@@@@@A@@@A@A@A@@@A@@@@B@@@BA@@@@@C@@@C@@@@@@@@@@A@@A@@@@AAAA@@@@@@@@@A@@@@@@@A@@@@@@A@@A@@@@@A@@@@@@@@@@@A@@B@@@@A@@@@@AA@@@@ABC@A@@A@@A@@@@@@@A@@@@@@@@@AB@@@@A@A@@@@@@@@@A@A@@@@@@@A@@@@@@@@@A@@@@A@@@@A@@@A@@@@@@@@@A@@B@@A@@A@@@@@BE@A@@@@@@@AA@@A@@@@@@@@@@BE@@@@@@B@@@B@@@@@@A@@@AA@@A@@@@BA@@@A@@@@@@@AA@@A@@@A@@@@@@B@@@@AB@BC@@@@@A@@@@BAB@@A@@@A@A@@DE@@@@@A@@@A@@BA@ADC@@@@B@@@@B@@BA@@BA@@B@@@B@@@DA@@@@DAB@BCB@BA@@BA@A@@@AB@@A@@@GAA@@@AA@@AA@@@CE@GAG@A@@@A@@@A@A@@@A@@AAA@AAECCAEAA@A@C@GB@@A@@@C@A@ACCAACAC@C@AA@@A@@@AA@AAA@@@ODEBMDEBC@A@C@@AGCA@@AA@@AAA@@AAA@A@@AA@A@@@A@A@A@@@A@@@C@A@AAEAAC@@AACEA@A@@@AAAAA@@AAEBE@CDE@I@A@@@AA@@AA@AA@@A@AA@@A@A@AAA@AA@@A@AAA@@@A@AA@@AA@@@AAA@@AAA@A@@AA@A@@@A@A@@@A@A@A@@@A@A@@@AAA@A@@AA@A@@AA@AA@@AA@@AAA@A@@@AB@BA@AB@@A@A@@AA@@AAA@AA@@AA@@AAAA@@AA@@A@C@C@C@A@AACAC@A@@AA@@@A@A@@@A@@@A@@@AAA@@AAEEEGCE@@@A@@@A@A@@@AB@@A@@DCBCBADAFCHEFABC@ABC@ACECCAE@CBCDGFEHE@@BA@@@A@A@A@C@A@C@A@@@ABAB@@AB@B@DAB@B@@@BABABA@C@AAC@AACAA@@CA@@C@A@@D@B@@A@AD@B@@@@@BC@A@@@@B@@@@A@A@A@@B@B@@A@@@@@AB@@@@@@A@A@@@@@A@A@CB@@@@A@A@@@@@A@C@@@KBG@A@A@@@B@@B@B@B@@@@A@M@C@@@@@@B@@@BBB@D@@@@@@A@E@@@A@@@@AAAA@@@A@AAA@CAA@@A@@A@@C@@@A@@A@@@@A@@@@A@A@@@A@@@@B@B@@@AA@@@@@@@@@@@A@@@@@@@@@A@@@@B@@@B@BA@@@AA@A@@@@@@A@@@@A@@@@@AAB@@@@A@@@A@E@@B@@@@@@A@A@@@A@@@A@CBA@A@A@C@C@CB@@@@ABA@A@A@@@A@@B@@C@BAA@@@@@A@A@@A@@@@@@@C@@A@CAG@@@A@A@AA@@A@A@@@AA@@@@@@@A@A@A@@A@A@@@@@A@@@@A@A@A@A@@AB@@@@A@@@@@C@E@A@@@@@@D@BA@@@A@@@@B@@@BA@CBAB@@@@@@@@AB@@A@@B@@@@A@@@@@@BAB@@@@@@@@A@A@@@A@@@@BAD@@AACAAAA@B@@ABA@A@@@@A@@@@@@@A@@@@@@@AA@@@@AA@@@@AA@@@@@@@@A@AB@@@@@@@A@@A@@@@@@@ADEDEDCDCBABA@@A@ACA@A@A@AEB@@A@@@@A@AA@G@@@@@ABAHDL@B@BB@AB@@@@B@@@B@@@@@@@@@@B@B@@@@BB@D@BBBB@@B@BA@@DG@@@A@@AC@@@E@@GAACBIDGDCBCBEDEBCBCDAHC@@DC@U@A@@DIA@EA@A@ICAAA@A@@AA@AA@@AAA@@AA@A@@AA@AA@@@A@@AA@ABC@OBCYAA@AH@LAF@B@NAF@D@BADCD@@C@GBGBG@EBC@A@C@A@CBC@ABIBC@EBA@A@A@A@A@CBC@A@C@ABC@C@A@CBC@A@A@C@ABA@A@A@C@CBA@A@A@A@CBA@A@C@ABC@A@CBC@A@CBA@@@A@CBA@CBC@ABCBA@A@CBCBC@ABA@CBABA@A@ABA@ABA@@@A@A@CBA@A@CBA@A@C@@@ABA@ABA@AB@@A@ABA@A@A@@@A@@@A@@@@BAB@@@@A@@@ABC@ABA@@@@@@@@@BB@@@@@B@@@@A@@@@@A@@@A@A@AAA@@B@@@@@@@@BB@@@@@@A@@@A@@AA@@@A@@B@@@@@B@@@@A@A@@@@@A@@@@@AB@@AB@@A@@@A@@B@@A@@B@@ABCBG@@AGA@C@AKAAABAIAA@ANDJBLBBD@ABCB@@@BA@@@@@@@AB@@@@@@A@AA@@@@@@A@@@@@@B@@@@@@A@@B@@ABA@@@@@@@CD@@A@A@A@@@@@@@AB@@@@@B@@@@@B@@AB@@@@@@@BA@A@@BA@@@@@AA@@A@@@@BA@@@AB@@@@A@@@@@@@A@A@@@@@A@@@A@@@@@@B@@B@@B@@@@@B@@A@AB@BA@@B@@@@@@@@@@AB@@@@A@ABA@@@@@@@AB@@@@@B@@@@A@@@@@@@@@A@@A@@@@@@A@@@@@@BA@@@@@A@@@A@@@A@A@@@A@@@@@@@A@@@A@@@@BA@@@@@A@@@@@A@@@@@A@@@@@@@@@AB@BAB@@@@C@@@A@@@@B@@@@AB@@@@@@@@A@@@@@@@A@@B@BAB@@@@@@@@AB@@A@@BA@@@@@@A@@A@@A@@A@@@A@@@CDA@@BA@@B@@@@@BAB@@A@@@@@@@A@A@@@AB@@@@@@@@A@@@@B@@@@@@@B@@@@C@A@@@@A@@A@@@@@@@@@@A@@@@AA@@@@@@@@@@A@@@@BA@@B@B@@@@ABCB@@ABABABABA@ABABA@A@A@A@A@@@@B@@@@@B@@@BA@@BA@A@A@@BA@A@AB@@A@@@ABA@A@@BA@@BA@ADA@A@@B@@@@BB@B@@@BABADA@@B@BA@@BAB@@@B@@@BAB@B@@AB@@@B@B@@@@AB@BA@@B@@@BB@@B@@AB@@@BA@@@AB@@AAC@@BA@@@@B@@BB@@AB@BA@@@AB@@A@@B@@@B@@@B@B@B@@@BA@ABA@@@A@@BA@BB@@@B@@AB@@AB@@@@AB@@@@@@@@@B@B@D@@AB@@@BA@ABA@CBABCBAB@B@@@B@B@@@B@@ABC@@BAB@@@B@@@BAB@DA@AB@@@@@B@BAB@BA@@@A@ABA@A@A@@BA@A@A@AAA@A@@@A@ABAB@BABABABADA@@@A@ABA@A@C@A@CB@@A@CBABADADEFEJADGJ@HADAPCP@@@LBJBHDFDFFDAB@@AB@@@DBB@@@B@BA@@BB@B@@@BB@B@@@BA@AB@@BB@@B@B@@@B@BAB@@@BBB@@@BBB@@BB@@B@@@BAB@@A@A@@@AAA@@@A@AAA@@BA@A@@B@@@B@@@BB@B@BB@@B@B@@@B@B@BB@@F@@@BAB@@AB@BA@@BAB@@AB@B@B@DAD@B@BBFDBBBDFJBBDHBDFJJRNXJPDF@HBLBXAP@N@N@TBN@HAFAFELGLIPCFAD@DDFDJDLHTFRDJDDFFDB@DDHFZFDBBDBB@B@B@@EBCL@@@B@BBDDF@D@D@@CH@BE@@D@B@LB@AB@@@@AB@@@@@H@@AFA@AHBTGH@@CHBDA@C@CJAD@BDFBRFDC@AB@BBB@B@@@@BA@@BVH@AA@FG@A@A@AD@@@BAA@@ABA@EBAPGNB@BDBFBH@@@@@H@ACB@TDF@HHF@@BAF@BF@@DCA@DD@@FH@@DB@@AB@@AD@B@HBA@JB@BHBD@B@B@@FR@@CFBBEDBBGD@ACF@@CD@D@@A@@@A@A@AB@H@@B@DF@@DD@@CFAJ@@AH@@@F@BBL@@BVA@AB@@@N@@@DAN@NBDCR@HABA@ABATAX@FFNDDBDBA@@@@BA@@@@@A@@B@@@@@AA@@@@@@@BBABA@@@D@BA@@BB@@@@BC@@@@FFB@B@B@@@@@B@DBD@BBB@@@@@@BAB@BB@@@ABB@@BB@@@BB@@BE@@@@BBDBBBB@B@@BB@D@FB@@B@@@D@D@B@BA@A@@B@DAB@B@@@BDB@BBBD@B@BB@@@B@@A@@B@@@@BBABBBA@@@AB@@@DAB@BABA@@@@@@B@@@B@@A@@B@@@@BBAD@BB@@BBB@@AB@B@@@B@@A@@@A@@@AD@D@BAB@AA@AB@DAD@D@DAD@B@BAB@BA@@BC@A@AB@@@B@DBBBBA@@@@BBB@@AAAB@@A@AB@B@BBB@@@BB@BBBBB@@@B@@@BB@@BB@@@BBD@DB@@@@AF@@@B@@BD@B@@BD@B@@DB@@@DB@@@F@D@@@B@B@D@BADBDAB@H@@@BAD@@AB@B@B@B@@@BDB@B@B@D@@@BAF@DBB@@@@A@@D@B@B@B@B@@AB@@A@@B@B@@@@AB@B@BAB@@@@B@@BAB@B@@@BBF@B@D@B@B@BBB@BBB@D@@@F@BAB@B@DBDB@@DDB@DBHBD@@@H@@A@G@A@AB@B@@B@@@@BAAA@@B@@@B@@@B@BB@@BAD@B@B@BBB@B@BA@A@@@AB@BBB@BBABB@@@B@B@@@DBDDB@@@@BB@AB@@A@@D@B@@@B@B@BDBF@@@BB@@@D@B@B@BBD@@DAB@D@BAD@B@@@@@B@@@@B@DB@@B@@DA@@B@@BB@@BDB@@BAB@ACB@BAB@@@@AB@B@@@@BB@@BB@DBB@B@BBB@B@BB@@BB@@@B@@A@@BB@BBB@@BBB"],
                "encodeOffsets": [
                    [123095, 37934]
                ]
            }
        }, {
            "type": "Feature",
            "id": "370285",
            "properties": {
                "name": "莱西市",
                "cp": [120.526226, 36.86509],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@DABC@C@A@ABABAHCB@@C@@BDD@BA@ABB@@BBB@BAB@@CAC@ABA@ABC@ABA@ABC@@@ABA@A@@@@@A@A@A@AAEAC@C@AC@A@G@BA@AA@BAC@BABABA@AC@BAB@@AA@@AAC@@A@@A@A@A@C@AAA@A@ED@@A@C@BDAB@@G@A@A@@E@@AF@@@E@@A@@B@@A@@BCA@@ABC@A@AAA@CECA@@@C@@AAABCBA@@BE@@@AB@BA@A@@@BB@BAF@@CA@@AFAB@DADA@@DBBBBBFBFDBBB@FABA@@DBB@BAD@@B@@BBB@B@BBBBB@B@BB@B@@@@@D@B@BDFB@D@@AB@@A@ABAA@@A@A@@@A@C@A@@ACBADDPA@AFB@AH@B@@ABBBB@@B@B@BADG@CBAA@C@@BCA@AAA@ABAB@D@B@DC@C@A@@BCBC@CB@@A@AACA@@ACAA@C@AA@@AAAC@AC@@A@@@@HC@E@@@A@@@CB@@A@A@CAAAACB@CB@@AAA@AE@BGI@B@E@ABA@@BC@@FA@@DG@@BCB@@ABABC@CAAAAA@G@C@@C@@@@@@@@K@@EBBCA@@C@@A@@CA@@AA@@@@@@A@@@EB@@AA@@@@A@@@A@@@A@@C@BC@@@AAC@@@ABA@A@AA@@@C@@@AA@@@@@@@@@CA@@@A@@@C@@@A@@CB@B@@@@@B@@C@ABC@@@A@@@ABA@AB@B@D@AEB@H@B@@@BEB@@@@@BCAAA@@A@@@C@AAABAB@@@AA@@BA@@@AB@AA@AA@@A@@@A@A@AD@@AD@DA@@BA@A@@A@@A@@D@B@@AB@@A@@D@@A@@BABAD@ABB@@ABB@A@@@ABCBB@ABA@ABA@@B@@AB@@@B@HB@CD@@@D@@@D@@@P@B@D@B@@DDBBGA@@CB@@@@@@DB@BABB@CA@BKAAA@BI@EA@BCGA@A@@@ACAA@C@A@A@A@AAA@@@@@@A@CA@C@@@A@AB@@C@@BA@AAAACAC@C@E@A@A@C@CAA@@@C@AAAACBA@@@BE@@@A@AAABC@AB@@A@@@C@AA@@A@@BA@@AE@@@@@@@A@AB@@@@A@@@@B@@A@@D@DAB@DB@AB@BBB@@@BABA@@A@@AB@@A@@@@DABAD@@AC@@AA@@@BA@@@AA@C@@A@ACA@CC@@A@CAA@AD@@DB@@EF@BBDAB@DCBAB@B@DAB@DAF@@@BA@@BABA@AB@AA@A@AA@@AA@AAAA@CAACAB@B@@AE@@@@AF@@@CA@ABCACA@@@BA@AB@CA@A@@AAAAAAA@CABC@A@@@@CBABC@@@@AA@A@@A@@A@A@@@@BA@@@@@@@A@@B@B@@A@@A@A@@ABAAA@@@CBK@A@A@C@@BA@AA@@@@CAAB@@@BA@EAAA@A@@B@@ABCA@@C@AA@@AA@@AAEACAA@@@A@A@A@AA@@@@AAA@@AAA@@@@A@A@@GC@@AAC@BA@@AAC@BA@A@@@A@@@ABAC@@@A@@@A@A@EADEDE@ABAAA@CBA@@@@FBB@@A@AC@C@@A@AA@@@@@@C@A@A@ABCBA@A@@HBBB@A@@@ABA@@BABAB@B@D@BB@@B@BCC@@@@AB@B@@ABA@AB@BAB@D@@@D@@A@@D@@@F@@@@BFB@@FBB@BAB@DC@A@E@@@AB@@C@@B@BABAB@BAB@@@@@@@CA@ABCBG@@F@@@@AA@@@AA@A@ADB@AB@@@@A@AB@AABA@A@A@@@AA@AA@@AA@AEA@A@@AA@@EC@ABBDAEA@@BABAB@@@@@DABB@A@@D@BAD@BBBA@AB@B@@@B@@@D@BA@@@B@@@@D@B@B@@ABBBAB@BABA@@B@DBBABCA@@ABCBCA@BABBBABAA@@ABABB@@D@@@BA@@@A@A@@@@B@BA@@D@@@@@@AB@@A@@@@@AA@@@A@AAA@C@@@BOBGB@B@B@BD@@@B@@F@D@B@@BB@@@BBBBB@BBBAB@BA@@BBBAA@@AB@B@BA@@D@BB@@BA@@@@ACAA@A@AA@A@@C@ABABA@@BA@AB@@@B@@@@@BDB@@@@AD@@AB@BA@ABA@@ACB@AA@A@AAAA@@A@AB@@KBC@CAC@@AA@AG@@DC@@@E@CA@AC@AC@A@E@C@ABA@@A@@AAC@@A@A@@AA@@@@AA@@A@@BA@GAE@@B@@C@AAAA@A@AA@@AA@IAE@@@@C@E@A@A@@B@BA@@@A@A@@@A@@@AAA@A@@A@AACA@@AA@@AA@A@A@@@C@@DA@A@@@@B@@ED@@A@@B@@A@CAA@A@C@@A@@CAABA@@@@B@DABA@@BA@@BAB@BAB@@@LC@AA@EA@A@@BABCBAAA@A@@@@A@A@@DA@AB@BC@@@AACA@A@CAA@C@AA@EBG@E@@UAEABA@AC@@@C@@@@A@AAA@@@AA@@AC@G@@B@@A@@AA@E@@@EBA@@D@BC@BB@B@D@B@B@D@BA@A@@B@B@BCBA@@F@DBD@@BBB@B@@B@@BB@@@B@@ABD@BBA@@BA@@B@BA@@B@@@DCBAB@@CB@B@BABE@ABA@B@B@@BB@B@B@BBA@@@@B@D@@@B@BA@@@C@@@A@A@A@A@CAA@AAA@A@@DBB@@@BABA@@@@@@@AA@@@@@DC@@@@BA@@@ABA@ABA@@DA@A@A@@@@@C@E@A@A@@B@@@@A@@@@@@@@@@@@@@A@@@@A@@A@@@@@@A@@@A@@@@@@@@@@@@@@A@@@@@A@AA@@@@@@@A@@@@@@@@@@@AA@@AA@@@@@@AAA@@@@A@@@A@@@A@@@@@@@@@@@@@@A@@@@@A@@@@@@@@A@@@@@@@AG@E@@@@@@A@A@@@@@A@@AB@@@@@A@@@A@A@@@@A@@@@@@A@@@@@@B@@@@@@A@@@@@@A@@@@@@@@@@AA@EBE@@@@A@@@A@@@@@A@@@@C@A@A@A@@@@@@@@@@B@@@@A@@@E@A@A@A@@@@@@A@@@@@A@@@@@@A@@@@@A@@@A@@@A@@B@@@@@@@@@DA@@@@B@@@@@@A@@@A@@@BF@FG@E@@C@AA@A@A@@D@@@BC@C@C@K@C@@@EAC@@@A@A@A@A@C@@@AAA@A@AAAB@A@B@B@@@@A@@B@@@AA@@@@@A@@@@BIDE@@B@@@@A@@@@@EBBB@@@@B@@@@@@@@@AB@@@@A@@BG@@@@@@B@@@B@@@@@@A@@@@@@@@B@@@B@@@@@@@@A@@@@@A@@@A@AA@@A@AAA@@@A@A@@@A@C@@@A@AA@@A@AA@@AA@@@AA@@A@AA@@AA@@A@@AA@A@@EB@@IBA@CBA@DDBD@@BD@BA@@@BFD@@@AB@@@BA@@@A@@@A@ABE@@A@A@AAA@@BAA@@@@A@@@@@@@@AC@A@A@@@A@@A@@@@@A@@A@@@@CBC@EBC@E@C@C@EBAA@B@@A@@@@@@B@@@@@D@@@@@B@@@@@B@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@AB@@@@@@@@@@A@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@B@@AA@@@@@@@@@A@@@A@@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@A@@@@@@B@A@@@A@@AA@A@A@AA@@C@BF@@@@@B@@@@@@A@@@@@@@A@@A@@A@@@@@A@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@A@@@@@A@@@@B@@A@@@@@@@@@@@@B@A@@@@@A@@AA@@@@@@@@@AEA@@A@A@A@ABA@@@@@@A@@A@A@@@@A@@@@@@BA@@@A@@@@AAA@@@C@@AA@EBG@E@CBA@@B@@@@A@@@@@@B@@@@@@AA@@@@@@A@@@@@@A@@@@@@@AE@A@@@@@@B@@@@A@@@@@@@A@@B@@A@@@@@@@@@A@@@@@@@@BA@A@AB@@A@@@@@A@@@@@@@A@@@@A@@A@@@@A@@@@@@@A@@@@@A@@C@C@CBCBEB@BCDGJPC@@B@BBB@@B@@@BB@@B@DBDBDDBBDB@D@@@B@@@HAD@B@B@FBDBFDBBB@BB@@@B@@@B@B@@@B@@@BBH@HDF@@B@@BB@@B@@BB@H@@@BA@@B@@@BAB@@ABA@ADA@CB@@@@CB@@A@@@A@@@AB@@AB@@@A@@A@@@@@CD@BAB@@@B@@@B@@@@CF@@@B@B@@@BA@AB@@@@@B@@@@ADA@@B@@A@@@@@@@@B@@@BB@@B@@@@@@@B@@AB@@@@@BB@@B@@@B@@@@A@@@A@@@@@@@AF@@@@@@@@@@@BB@@B@@@@@@@BAF@@@@B@@@@BA@@@@B@@@@@@@@@B@@@B@@B@@@@@@B@@@@@@@@@B@@@@@@@B@B@@@@@@@@@B@B@@A@@B@@@@@@@@@B@@@@@@@BB@@@@BAD@B@@B@@B@@@@@B@@A@@@@B@@@@@@@@@@@B@@@@@BB@@@@@@@@B@@@@@@@B@@@@@@@@BBBB@@@@@BB@@@@@@@@@@@@D@@@D@@@@AB@@A@@@@@@B@@@B@B@B@@@B@@@@@B@B@@BB@@@BA@@B@@@B@@AB@@@@@@@B@@@@@@@B@@@@@@@B@BA@@B@@A@ABAB@@BB@@AB@@A@@BAB@B@B@B@@ABB@@B@@BB@@@B@@@B@BA@@@@@AB@@AD@BAB@@@@@B@@@BAHAJ@J@J@D@B@BB@BB@BBB@@@B@@BB@B@@@BBB@@BB@BB@@B@@BDBB@@BB@BBB@BAB@BBB@BBB@B@B@B@D@BBB@BB@@B@@AB@@BB@BBBDJ@@BB@BBB@B@@@B@@@@@@@@@@@@@BBB@@@@@@@B@B@B@B@@@BBD@BBD@FBD@BBD@D@BBB@B@B@D@D@BBF@D@BBBBB@BBDBDBB@BB@@@@BB@@@@BB@@B@@@@@B@@@@@B@BAB@@@B@B@@ABABAB@@ABA@@BABADA@AB@@A@@@A@@@A@@BA@AB@@BB@@@BAB@@AB@@@BBD@B@@@BBBBBB@@BB@B@FBBBB@@@B@DBB@@@B@@@@@B@BB@@@@B@@@@@@@@@B@@BBBB@@B@@@@@@B@BBBDBF@@@B@@@BB@@B@@@BBB@B@@@BB@@@@@BB@B@@@B@@@B@@B@@@@BB@@@@BB@BB@BB@@B@BB@BBFHBB@@@@BB@@@B@@@@@BA@BBA@B@@@@B@@@@@@@@@B@@@@@@@B@@@B@B@@@@@B@@@@@@@@AB@@@B@@CB@B@@@B@@@@ABA@@@@@@BAB@@@@@@@BA@CBA@@B@@@@@B@@@@ABABABAB@@A@@@@@AB@@@BA@@@@BBB@@@B@@@B@@B@@@@BB@@@@BB@@@B@@@@B@@B@@B@@@@@@@B@@B@@@@@@B@@B@@@@@@@B@@@@@@@@@B@@@@@@BB@@@B@@@B@@B@A@@B@@@@@B@@B@@B@@BB@@@BBD@@@B@@B@@B@@B@@@@@@@BA@@@AB@@@@@B@@BB@@A@A@A@ABA@A@A@AA@@AB@BA@@@@A@@C@@@@@A@@@A@@@AAA@A@@BA@@B@@A@AB@@@B@@@BA@@@A@C@@@A@A@AA@@BA@A@@BAE@@@AAA@@AA@AAA@ABA@C@A@A@A@@@A@A@A@@@@BA@ABABABCBCBABA@@B@BB@@B@@AB@@@B@@BBB@@B@BBB@BB@@B@@BA@AB@B@B@B@@@B@@@@B@BB@@@B@@@@BB@@@@@B@B@@@@@@@B@@@DBA@ABBBB@BAB@@@@@BABB@@@@@BAB@@@@@B@@B@@@B@@@@@@AB@@@BB@@B@@@AB@@@B@BB@@@@@AB@@ABAAA@A@@BA@@B@BABAB@@A@@AA@@BA@@BA@A@AB@@@@A@@@EBA@@@@@AB@@A@A@@@AAA@@@C@A@A@A@A@A@A@CA@AA@A@@@AAA@A@C@C@@@A@A@@@AA@@@AAAAABA@@A@@AABA@C@A@C@A@A@A@@BABC@A@@B@@BB@@BB@B@B@BA@AB@@@B@B@BABCBCBA@@B@@CBA@AAA@A@@AAA@A@@A@AA@@A@A@@@@@A@@@A@@@A@@BA@AAA@A@@@A@@@@@A@@@A@@@AB@@@B@@A@@@@@A@A@@B@@BBBB@AB@@BB@@BAB@BBBBDB@@@CB@B@@@@DBB@BB@@@@B@@@@@BD@D@DAH@BCB@@@B@@@BBDBBABBBDBAD@DD@@BAB@B@@BB@@@BB@@B@BD@DBLB@FA@@B@@AB@@BDD@@@@@B@@@@@@DB@@B@@@B@BAB@BB@@@@B@@AB@@@@ABBB@B@@@B@@@@@BB@@@@B@B@@@BB@@B@B@D@BC@BBBDBDBB@DB@D@DABABABCBABAB@B@B@BDB@BA@@FADCHCB@D@B@BBB@@BB@B@@BBDB@BB@@B@ABBDBBD@@BBB@B@@BBB@BB@@@BB@BBB@B@@ABAAEB@BA@BBB@B@B@@@BB@DBD@B@@AD@@@B@B@B@B@BAB@@B@BFBBA@A@@@A@E@ACC@CA@@A@@@A@AB@@@@@B@@A@@@A@@B@@@A@@@@A@@@@@@@@@@BAA@@A@@@@A@@A@ABCBC@@B@@@BB@B@BBB@@@@AB@@@DB@LCF@BC@@@A@@BAB@BBBA@CB@FBB@@BB@@@BB@@B@@@@B@B@B@@B@B@BA@@B@DCBC@AB@@A@@C@@AA@A@BCD@FB@AA@@A@E@@@A@@AC@@@C@@@A@@BA@@B@@@B@BA@@@ABAB@D@DABA@@@@AA@@@A@@@A@C@ABA@@B@@@@A@@BA@A@@@ABBB@BBDB@B@@AB@@@B@@@B@@B@B@@@@DB@B@BAB@@D@DABC@BBFB@@BB@B@B@@@@@@BB@BBD@B@B@@BB@@B@BBBBD@BBBBDAB@B@B@FBB@B@D@@AB@BDB@ACBA@@@@D@BBB@@AB@@@B@B@@@BABABA@ABA@@B@B@@AB@@APAB@D@B@@BBBBBBB@F@B@B@@@@A@A@@B@BAD@B@@@@@@@BA@@BA@AB@@@BB@B@B@BA@@@AB@B@B@B@B@BBBDBB@@B@BA@AD@BCBB@B@@FBDB@@D@B@@@@DF@@@D@B@D@ABA@@BA@@@@BB@H@@B@@@BA@ABB@D@@@ABB@B@@@@AB@@@@AB@B@@A@CHABBB@D@@@B@BABAB@BAB@B@BAB@@BBB@BD@DBDDLDBBDBBAD@@@H@B@@BD@@BB@B@B@BBBDABBH@B@@BBBBBBDBBBDBDDDB@BBDB@@@BBABABD@B@B@@@@A@@@@@@H@B@BBB@FA@@A@@A@ABA@AD@F@"],
                "encodeOffsets": [
                    [123418, 38036]
                ]
            }
        }],
        "UTF8Encoding": true
    });
}));