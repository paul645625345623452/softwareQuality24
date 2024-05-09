test("A-Rules", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-A-1");
  assert.propEqual(convertRomanToInteger("cdlvi"), {value: 456, message: '', result: true}, "TC-A-2");
  assert.propEqual(convertRomanToInteger("DCCCLXXXV"), {value: 885, message: '', result: true}, "TC-A-3");
  assert.propEqual(convertRomanToInteger("mdxii"), {value: 1512, message: '', result: true}, "TC-A-4");
  assert.propEqual(convertRomanToInteger("CcX"), {value: 210, message: '', result: true}, "TC-A-5");
  assert.propEqual(convertRomanToInteger("MCV"), {value: 1105, message: '', result: true}, "TC-A-6");
  assert.propEqual(convertRomanToInteger("lI"), {value: 51, message: '', result: true}, "TC-A-7");
  assert.propEqual(convertRomanToInteger("ML"), {value: 1050, message: '', result: true}, "TC-A-8");
  assert.propEqual(convertRomanToInteger("xL"), {value: 40, message: '', result: true}, "TC-A-9");
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-A-10");
  assert.propEqual(convertRomanToInteger("XXX"), {value: 30, message: '', result: true}, "TC-A-11");
  assert.propEqual(convertRomanToInteger("MXX"), {value: 1020, message: '', result: true}, "TC-A-12");
  assert.propEqual(convertRomanToInteger("Mv"), {value: 1005, message: '', result: true}, "TC-A-13");
  assert.propEqual(convertRomanToInteger("DV"), {value: 505, message: '', result: true}, "TC-A-14");
  assert.propEqual(convertRomanToInteger("i"), {value: 1, message: '', result: true}, "TC-A-15");
  assert.propEqual(convertRomanToInteger("IV"), {value: 4, message: '', result: true}, "TC-A-16");
  assert.propEqual(convertRomanToInteger("CI"), {value: 101, message: '', result: true}, "TC-A-17");
  assert.propEqual(convertRomanToInteger("di"), {value: 501, message: '', result: true}, "TC-A-18");
  assert.propEqual(convertRomanToInteger("MI"), {value: 1001, message: '', result: true}, "TC-A-19");
});

test("B-Rules", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-1");
  assert.propEqual(convertRomanToInteger("iiII"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-2");
  assert.propEqual(convertRomanToInteger("ll"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-3");
  assert.propEqual(convertRomanToInteger("VV"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-4");
  assert.propEqual(convertRomanToInteger("DD"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-5");
  assert.propEqual(convertRomanToInteger("CcCC"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-6");
  assert.propEqual(convertRomanToInteger("XXXX"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-B-7");
});

test("C-Invalid_Subs", function(assert) {
  assert.propEqual(convertRomanToInteger("VX"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-1");
  assert.propEqual(convertRomanToInteger("vl"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-2");
  assert.propEqual(convertRomanToInteger("LC"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-3");
  assert.propEqual(convertRomanToInteger("LD"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-4");
  assert.propEqual(convertRomanToInteger("dm"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-5");
  assert.propEqual(convertRomanToInteger("IL"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-6");
  assert.propEqual(convertRomanToInteger("Ic"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-7");
  assert.propEqual(convertRomanToInteger("iM"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-8");
  assert.propEqual(convertRomanToInteger("XD"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-9");
  assert.propEqual(convertRomanToInteger("XM"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-C-10");
});

test("D-Incorrect_format", function(assert) {
  assert.propEqual(convertRomanToInteger("mmmcmd"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-1");
  assert.propEqual(convertRomanToInteger("MMMCMCD"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-2");
  assert.propEqual(convertRomanToInteger("MMMCMC"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-3");
  assert.propEqual(convertRomanToInteger("MMMCDCM"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-4");
  assert.propEqual(convertRomanToInteger("MMMCDC"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-5");
  assert.propEqual(convertRomanToInteger("xcxl"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-6");
  assert.propEqual(convertRomanToInteger("XCL"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-7");
  assert.propEqual(convertRomanToInteger("XCLX"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-8");
  assert.propEqual(convertRomanToInteger("XCX"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-9");
  assert.propEqual(convertRomanToInteger("XLXC"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-10");
  assert.propEqual(convertRomanToInteger("ixIV"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-11");
  assert.propEqual(convertRomanToInteger("IXV"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-12");
  assert.propEqual(convertRomanToInteger("IXi"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-13");
  assert.propEqual(convertRomanToInteger("IVI"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-D-14");
});

test("E-Invalid_roman_inputs", function(assert) {
  assert.propEqual(convertRomanToInteger("ASFD"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-E-1");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: INVALID_ROMAN, result: false}, "TC-E-2");
  assert.propEqual(convertRomanToInteger("1234"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-E-3");
  assert.propEqual(convertRomanToInteger("#"), {value: 0, message: INVALID_ROMAN, result: false}, "TC-E-4");
});

test("F-Basic_int_to_roman", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-F-1");
  assert.propEqual(convertIntegerToRoman(456), {value: "CDLVI", message: '', result: true}, "TC-F-2");
  assert.propEqual(convertIntegerToRoman(885), {value: "DCCCLXXXV", message: '', result: true}, "TC-F-3");
  assert.propEqual(convertIntegerToRoman(1512), {value: "MDXII", message: '', result: true}, "TC-F-4");
  assert.propEqual(convertIntegerToRoman(210), {value: "CCX", message: '', result: true}, "TC-F-5");
  assert.propEqual(convertIntegerToRoman(1105), {value: "MCV", message: '', result: true}, "TC-F-6");
  assert.propEqual(convertIntegerToRoman(51), {value: "LI", message: '', result: true}, "TC-F-7");
  assert.propEqual(convertIntegerToRoman(1050), {value: "ML", message: '', result: true}, "TC-F-8");
  assert.propEqual(convertIntegerToRoman(40), {value: "XL", message: '', result: true}, "TC-F-9");
  assert.propEqual(convertIntegerToRoman(5), {value: "V", message: '', result: true}, "TC-F-10");
  assert.propEqual(convertIntegerToRoman(30), {value: "XXX", message: '', result: true}, "TC-F-11");
  assert.propEqual(convertIntegerToRoman(1020), {value: "MXX", message: '', result: true}, "TC-F-12");
  assert.propEqual(convertIntegerToRoman(1005), {value: "MV", message: '', result: true}, "TC-F-13");
  assert.propEqual(convertIntegerToRoman(505), {value: "DV", message: '', result: true}, "TC-F-14");
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-F-15");
  assert.propEqual(convertIntegerToRoman(4), {value: "IV", message: '', result: true}, "TC-F-16");
  assert.propEqual(convertIntegerToRoman(101), {value: "CI", message: '', result: true}, "TC-F-17");
  assert.propEqual(convertIntegerToRoman(501), {value: "DI", message: '', result: true}, "TC-F-18");
  assert.propEqual(convertIntegerToRoman(1001), {value: "MI", message: '', result: true}, "TC-F-19");
});

test("G-Invalid_int_Inputs", function(assert) {
  assert.propEqual(convertIntegerToRoman("XXXX"), {value: 0, message: INVALID_INTEGER, result: false}, "TC-G-1");
  assert.propEqual(convertIntegerToRoman("XX"), {value: 0, message: INVALID_INTEGER, result: false}, "TC-G-2");
  assert.propEqual(convertIntegerToRoman("..."), {value: 0, message: INVALID_INTEGER, result: false}, "TC-G-3");
  assert.propEqual(convertIntegerToRoman("$$$"), {value: 0, message: INVALID_INTEGER, result: false}, "TC-G-4");
  assert.propEqual(convertIntegerToRoman(""), {value: 0, message: INVALID_INTEGER, result: false}, "TC-G-5");
});

test("H-Limits", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: OUT_OF_RANGE, result: false}, "TC-H-1");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: OUT_OF_RANGE, result: false}, "TC-H-2");
});
