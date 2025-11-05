main()

function main(){
  // var doc: Document = app.activeDocument;
  // var book1 : Book=app.activeBook;

  // var name:string = doc.name;
  // var layer = doc.activeLayer
  // var TotalCount:number =book1.bookContents.length;
  // var file1 :File=File("D:\\projects\\inDesignedScripting\\new3in.indd")
  // alert(String(TotalCount));
  // alert(name);
  // alert(doc.allCellStyles.toString());
  
    // var prset:DocumentPreset=new DocumentPreset();
    // prset.bottom=10;
    // prset.top=10;
    // prset.left=10;
    // prset.documentBleedBottomOffset=5;
    // prset.documentBleedTopOffset=5;
    // prset.pageSize="A4";
 
 
    // var newDoc :Document = app.documents.add(true,prset)

    //step 1 : Create new document
    var doc : Document = app.documents.add();

    //step 2: set up document page size
    doc.documentPreferences.pageSize="A4";

  

    //step3 : set up the document bleed
    doc.documentPreferences.documentBleedBottomOffset=3;
    doc.documentPreferences.documentBleedTopOffset=3;
    doc.documentPreferences.documentBleedInsideOrLeftOffset=3;
    doc.documentPreferences.documentBleedOutsideOrRightOffset=3;

    //step3.2 : set up the document slug
    doc.documentPreferences.slugBottomOffset=5;

    //step4 :set up the document margin
    doc.marginPreferences.bottom=5
    doc.marginPreferences.top=5
    doc.marginPreferences.left=10
    doc.marginPreferences.right=10;

    //step4.2 :set up the document ruler and units
    doc.viewPreferences.showRulers=true;
    doc.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.CENTIMETERS;
    doc.viewPreferences.verticalMeasurementUnits=MeasurementUnits.CENTIMETERS;


    //Step 5: Optional – show alert to confirm creation
    alert("Document is Created SuccessFully Created")

    //step 7 : set the orientation
    doc.documentPreferences.pageOrientation = PageOrientation.LANDSCAPE;

    //Step 6: Save the Document in desktop
    var file1 :File =File("D:\\projects\\inDesignedScripting\\newFileCreated.indd");
    // doc.close(SaveOptions.YES,file1);
    doc.save(file1)
    // doc.save(file1,false,"",true);
    



  //   doc.save(file1);
  // doc.close(SaveOptions.ASK,file1);

}