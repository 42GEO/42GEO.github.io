// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DataAggregation/nls/strings":{_widgetLabel:"Dataaggregering",startPage:{defaultStartPageInstructions:"Den h\u00e4r widgeten hj\u00e4lper till med bearbetning och \u00f6verf\u00f6ring av data fr\u00e5n en fil till det valda lagret i kartan.\x3cbr/\x3e \x3cbr/\x3eV\u00e4rden i filen m\u00e5ste avgr\u00e4nsas med komma, tabb, semikolon eller vertikalstreck.",dragDrop:"Dra och sl\u00e4pp",browse:"Bl\u00e4ddra till Arkiv",or:"ELLER",userPrivilege:"Ditt konto har inte beh\u00f6righet att skapa eller \u00e4ndra data.",
userCredits:"${widgetName} kr\u00e4ver krediter f\u00f6r att anv\u00e4nda lokaliseringsfilen ${locator}.",contactAdmin:"Kontakta organisationens administrat\u00f6r om du vill fr\u00e5ga efter ytterligare krediter.",contactAdminEdit:"Kontakta organisationens administrat\u00f6r om du vill fr\u00e5ga efter redigeringsbeh\u00f6righet.",canUseLocator:"Lokaliseringsfilen ${locator} anv\u00e4nds f\u00f6r att hitta geoobjekt.",notEnoughCredits:"Inte tillr\u00e4ckligt med krediter.",locationAndField:"Plats- och f\u00e4ltinformation",
locationAndFieldHint:"V\u00e4lj de v\u00e4rden fr\u00e5n filen som ska anv\u00e4ndas f\u00f6r att uppdatera m\u00e5llagret.",cannotUseLocator:"Det gick inte att anv\u00e4nda ${widgetName}",noAnonymousEdit:"Lagret ${layerName} st\u00f6der inte anonym redigering.",pleaseLogin:"Logga in p\u00e5 organisationen ${org} eller kontakta organisationens administrat\u00f6r f\u00f6r att be om att anonym redigering ska aktiveras.",invalidEdit:"Ogiltiga beh\u00f6righeter",unableToAccess:"Det g\u00e5r inte att f\u00e5 \u00e5tkomst till ${layerName}",
appropriateCredentials:"Kontrollera att du har loggat in med r\u00e4tt autentiseringsuppgifter.",shared:"Kontakta organisationens administrat\u00f6r om du vill fr\u00e5ga efter \u00e5tkomst till lagret ${layerName}.",targetLayerLabel:"M\u00e5llager",homeButtonLabel:"Hem",mappingErrorMsg:"Klicka p\u00e5 pilen bredvid definiera f\u00e4lten"},mapping:{schemaMapping:"F\u00e4ltinformation",schemaMappingHint:"V\u00e4lj f\u00e4lt fr\u00e5n filen som motsvarar f\u00e4lten i lagret.",locationMapping:"Platsinformation",
locationMappingHint:"V\u00e4lj den typ av adress- eller koordinatinformation som kan v\u00e4ntas fr\u00e5n filen."},locationMapping:{locationMappingPageHint:"V\u00e4lj platstyp",useAddress:"Hitta med hj\u00e4lp av en adress",useAddressHint:"Data inneh\u00e5ller adressinformation",useCoordinates:"Hitta med hj\u00e4lp av koordinater",useCoordinatesHint:"Data inneh\u00e5ller X/Y-koordinatv\u00e4rden"},address:{addressPageHint:"V\u00e4lj adresstyp",singleField:"Enstaka f\u00e4lt",singleFieldHint:"V\u00e4lj det f\u00e4lt som inneh\u00e5ller adressinformationen",
multiField:"Flera f\u00e4lt",multiFieldHint:"V\u00e4lj de f\u00e4lt som inneh\u00e5ller adressinformationen"},coordinates:{coordinatesPageHint:"V\u00e4lj de f\u00e4lt som inneh\u00e5ller koordinatdata"},fieldMapping:{fieldMappingPageHint:"V\u00e4lj det k\u00e4llf\u00e4lt som mappar till m\u00e5lf\u00e4ltet",sourceField:"Matchande k\u00e4llf\u00e4lt",targetField:"M\u00e5lf\u00e4lt"},buttons:{addToMap:"L\u00e4gg till p\u00e5 karta",submit:"Utf\u00f6r",download:"H\u00e4mta"},review:{matched:"Hittade",
reviewMatched:"Platser hittades",reviewMatchedHint:"Granska platser som hittades.",unMatched:"hittades inte",reviewUnMatched:"Platser hittades inte",reviewUnMatchedHint:"Granska platser som inte hittades. Objekt som inte korrigeras skickas inte.",duplicate:"Duplicera",reviewDuplicate:"Dubblettplatser",reviewDuplicateHint:"Granska platser som redan fanns i lagret. Objekt som inte \u00e5tg\u00e4rdas skickas inte.",reviewLabelWithCount:"${totalMatchedFeatures} ${headerString} ${headerStringHint}",use:"Anv:",
fromLayer:"M\u00e5linformation",target:"M\u00e5l",source:"K\u00e4lla",fromFile:"K\u00e4llinformation",locationControlHint:"Granska adressuppgifter",duplicateAction:"V\u00e4lj en \u00e5tg\u00e4rd",item:"Post:",locateFeature:"Hitta geoobjekt",removeFeature:"Ta bort geoobjekt",featureLocated:"Plats hittades",valuesDoNotMatch:"Matchar inte befintligt v\u00e4rde",sync:"Synkronisera adressuppgifter med f\u00e4ltinformation",noFeaturesSaved:"Inga geoobjekt har sparats",someFeaturesSaved:"${num} geoobjekt har sparats.",
someFeaturesNotSaved:"${num} geoobjekt har inte sparats.",feature:"Granska geoobjektinformation",locationInfo:"Granska platsinformation",selectValue:"V\u00e4lj ett v\u00e4rde",reviewData:"Granska data",reviewDataHint:"Granska dina data innan du skickar dem till lagret.",reviewFeatureHint:"Granska eller redigera din geoobjekt- eller platsinformation.",duplicateModify:"Dubblett, beh\u00f6ver \u00e4ndras",duplicateSave:"Spara som nytt geoobjekt"},warningsAndErrors:{invalidCSV:"Fel vid h\u00e4mtning av objekt fr\u00e5n CSV, kontrollera om en giltig CSV-fil har valts.",
noLayersWarning:"Inget giltigt m\u00e5llager \u00e4r konfigurerat, kontrollera konfigurationen.",loadWarning:"Den h\u00e4r widgeten kr\u00e4ver en datak\u00e4lla i form av en geoobjekttj\u00e4nst. Definiera en datak\u00e4lla genom att konfigurera widgeten.",saveError:"Ett fel uppstod n\u00e4r geoobjekt sparades.",consumesCredits:"Det h\u00e4r verktyget f\u00f6rbrukar krediter n\u00e4r det anv\u00e4nds med tj\u00e4nsten f\u00f6r v\u00e4rldsgeokodning i ArcGIS Online.",noValue:"V\u00e4lj ett f\u00e4lt",
mappingTitle:"",locationMappingComplete:"Platsmatchning slutf\u00f6rd",fieldMappingComplete:"F\u00e4ltmatchning slutf\u00f6rd",settingsCleared:"Inst\u00e4llningarna kommer att rensas.",proceed:"Vill du forts\u00e4tta?",itemMoveMatch:"Objektet hittades och flyttades till listan \u00f6ver hittade platser",itemMoveUnMatched:"Det gick inte att hitta objektet. Det flyttades till listan \u00f6ver platser som inte hittades.",itemWillBeLocated:"Objektet tas bort fr\u00e5n listan \u00f6ver dubblettplatser.",
cannotLocate:"Det gick inte att hitta objektet. Bekr\u00e4fta platsinformationen.",invalidMessage:"Ogiltigt v\u00e4rde.",rangeMessage:"V\u00e4rdet m\u00e5ste vara mindre \u00e4n ${num} tecken.",locatorError:"Lokaliseringsfilen \u00e4r ogiltig eller inte tillg\u00e4nglig.",notConfigured:"ingen lokaliseringsfil \u00e4r konfigurerad f\u00f6r de aktuella lokaliseringsalternativen",noMoreLocators:"inga ytterligare lokaliseringsfiler har konfigurerats"},featureToolbar:{locate:"Leta upp",save:"Spara post",
cancel:"Avbryt redigeringar",cancelTitle:"Avbryt redigeringar",cancelMessage:"Avbryt redigeringar av den aktuella posten?"},_localized:{}}});