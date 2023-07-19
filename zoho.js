//Get instance of RecordOperations Class
let recordOperations = new RecordOperations();
//Get instance of BodyWrapper Class that will contain the request body
let request = new BodyWrapper();
//Array to hold Record instances
let recordsArray = [];
//Get instance of Record Class
let record = new Record();
/* Value to Record's fields can be provided in any of the following ways */
/*
 * Call addFieldValue method that takes two arguments
 * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
 * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
 * 2 -> Value
 */
record.addFieldValue(Field.Leads.LAST_NAME, "Node JS SDK");
record.addFieldValue(Field.Leads.FIRST_NAME, "Node");
record.addFieldValue(Field.Leads.COMPANY, "ZCRM");
record.addFieldValue(Field.Leads.CITY, "City");
/*
 * Call addKeyValue method that takes two arguments
 * 1 -> A string that is the Field's API Name
 * 2 -> Value
 */
record.addKeyValue("Custom_field", "Value");
record.addKeyValue("Custom_field_2", "value");
record.addKeyValue("Date_1", new Date(2020, 10, 20));
record.addKeyValue("Subject", "AutomatedSDK");
let fileDetails = [];
let fileDetail = new FileDetails();
fileDetail.setFileId(
  "479f0f5eebf0fb982f99e3832b35d23e29f67c2868ee4c789f22579895383c8"
);
fileDetails.push(fileDetail);
fileDetail = new FileDetails();
fileDetail.setFileId(
  "ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2"
);
fileDetails.push(fileDetail);
fileDetail = new FileDetails();
fileDetail.setFileId(
  "ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f"
);
fileDetails.push(fileDetail);
record.addKeyValue("File_Upload_1", fileDetails);
//Used when GDPR is enabled
let dataConsent = new Consent();
dataConsent.setConsentRemarks("Approved.");
dataConsent.setConsentThrough("Email");
dataConsent.setContactThroughEmail(true);
dataConsent.setContactThroughSocial(false);
record.addKeyValue("Data_Processing_Basis_Details", dataConsent);
/** Following methods are being used only by Inventory modules */
let dealName = new Record();
dealName.addFieldValue(Field.Deals.ID, "3409643000002000001");
record.addFieldValue(Field.Sales_Orders.DEAL_NAME, dealName);
let contactName = new Record();
contactName.addFieldValue(Field.Contacts.ID, "3409643000001074007");
contactName.addFieldValue(Field.Sales_Orders.CONTACT_NAME, contactName);
let accountName = new Record();
accountName.addFieldValue(Field.Accounts.ID, "3409643000000692007");
record.addFieldValue(Field.Sales_Orders.ACCOUNT_NAME, accountName);
record.addKeyValue("Discount", 10.5);
let inventoryLineItemArray = [];
let inventoryLineItem = new InventoryLineItems();
let lineItemProduct = new LineItemProduct();
lineItemProduct.setId(3409643000000986033n);
inventoryLineItem.setProduct(lineItemProduct);
inventoryLineItem.setQuantity(3);
inventoryLineItem.setProductDescription("productDescription");
inventoryLineItem.setListPrice(10.0);
inventoryLineItem.setDiscount("5.90");
let productLineTaxes = [];
let productLineTax = new LineTax();
productLineTax.setName("Tax1");
productLineTax.setPercentage(20.0);
productLineTaxes.push(productLineTax);
inventoryLineItem.setLineTax(productLineTaxes);
inventoryLineItemArray.push(inventoryLineItem);
record.addKeyValue("Product_Details", inventoryLineItemArray);
let lineTaxes = [];
let lineTax = new LineTax();
lineTax.setName("Tax1");
lineTax.setPercentage(20.0);
lineTaxes.push(lineTax);
record.addKeyValue("$line_tax", lineTaxes);
/** End Inventory **/
/** Following methods are being used only by Activity modules */
record.addFieldValue(Field.Tasks.DESCRIPTION, "New Task");
record.addKeyValue("Currency", new Choice("INR"));
let remindAt = new RemindAt();
remindAt.setAlarm(
  "FREQ=NONE;ACTION=EMAILANDPOPUP;TRIGGER=DATE-TIME:2020-07-03T12:30:00+05:30"
);
record.addFieldValue(Field.Tasks.REMIND_AT, remindAt);
let whoId = new Record();
whoId.setId(3409643000000836001n);
record.addFieldValue(Field.Tasks.WHO_ID, whoId);
record.addFieldValue(Field.Tasks.STATUS, new Choice("Waiting for Input"));
record.addFieldValue(Field.Tasks.DUE_DATE, new Date(2020, 10, 10));
record.addFieldValue(Field.Tasks.PRIORITY, new Choice("High"));
let whatId = new Record();
whatId.setId(3409643000000692007n);
record.addFieldValue(Field.Tasks.WHAT_ID, whatId);
record.addKeyValue("$se_module", "Accounts");
/** Recurring Activity can be provided in any activity module*/
let recurringActivity = new RecurringActivity();
recurringActivity.setRrule(
  "FREQ=DAILY;INTERVAL=10;UNTIL=2020-08-14;DTSTART=2020-07-03"
);
record.addFieldValue(Field.Events.RECURRING_ACTIVITY, recurringActivity);
record.addFieldValue(Field.Events.DESCRIPTION, "My Event");
let startDateTime = new Date("October 15, 2020 05:35:32");
record.addFieldValue(Field.Events.START_DATETIME, startDateTime);
let participantsArray = [];
let participant = new Participant();
participant.setParticipant("test@gmail.com");
participant.setType("email");
participantsArray.push(participant);
participant = new Participant();
participant.setParticipant("3409643000000836001");
participant.setType("Contact");
participantsArray.push(participant);
record.addFieldValue(Field.Events.PARTICIPANTS, participantsArray);
record.addKeyValue("$send_notification", true);
record.addFieldValue(Field.Events.EVENT_TITLE, "New Automated Event");
let endDateTime = new Date("November 15, 2020 05:35:32");
record.addFieldValue(Field.Events.END_DATETIME, endDateTime);
let remindAt1 = new Date("October 15, 2020 04:35:32");
record.addFieldValue(Field.Events.REMIND_AT, remindAt1);
record.addFieldValue(Field.Events.CHECK_IN_STATUS, "PLANNED");
whatId = new Record();
whatId.setId(3409643000002157023n);
record.addFieldValue(Field.Tasks.WHAT_ID, whatId);
record.addKeyValue("$se_module", "Leads");
/** End Activity **/
/** Following methods are being used only by Price_Books module */
let pricingDetailsArray = [];
let pricingDetail = new PricingDetails();
pricingDetail.setFromRange(1.0);
pricingDetail.setToRange(5.0);
pricingDetail.setDiscount(2.0);
pricingDetailsArray.push(pricingDetail);
pricingDetail = new PricingDetails();
pricingDetail.addKeyValue("from_range", 6.0);
pricingDetail.addKeyValue("to_range", 11.0);
pricingDetail.addKeyValue("discount", 3.0);
pricingDetailsArray.push(pricingDetail);
record.addFieldValue(Field.Price_Books.PRICING_DETAILS, pricingDetailsArray);
record.addKeyValue("Email", "z1@zoho.com");
record.addFieldValue(Field.Price_Books.DESCRIPTION, "TEST");
record.addFieldValue(Field.Price_Books.PRICE_BOOK_NAME, "book_name");
record.addFieldValue(Field.Price_Books.PRICING_MODEL, new Choice("Flat"));
/** End of Price_Books */
let tagsArray = [];
let tag = new Tag();
tag.setName("Testtask");
tagsArray.push(tag);
//Add Record instance to the array
recordsArray.push(record);
//Set the array to data in BodyWrapper instance
request.setData(recordsArray);
let trigger = [];
trigger.push("approval");
trigger.push("workflow");
trigger.push("blueprint");
//Set the array containing the trigger operations to be run
request.setTrigger(trigger);
let larId = "3409643000002157065";
//Set the larId
request.setLarId(larId);
let process = ["review_process"];
//Set the array containing the process to be run
request.setProcess(process);
//Get instance of HeaderMap Class
let headerInstance = new HeaderMap();
//Call createRecords method that takes BodyWrapper instance and moduleAPIName as parameters
let response = await recordOperations.createRecords(
  moduleAPIName,
  request,
  headerInstance
);
