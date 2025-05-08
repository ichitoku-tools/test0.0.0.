function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents).payload;
    const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("予約データ");
    sheet.appendRow([new Date(), payload]);
    return ContentService.createTextOutput(JSON.stringify({ status: "saved" })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
