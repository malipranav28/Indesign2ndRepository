//Create Document and Create a new Document and Then Add a new TextFrame In it

main2();
function main2() {
    //step1 : create a document
    var doc = app.documents.add();
    //step2 : create a textFrame in that document
    var testFrame1 = doc.textFrames.add();
    testFrame1.contentType = ContentType.TEXT_TYPE;
    testFrame1.geometricBounds = [10, 18, 50, 30];
    //add Text content in Frame
    testFrame1.contents = "Hello Indesign Scripting";
    alert("successfully added Frame");
}
