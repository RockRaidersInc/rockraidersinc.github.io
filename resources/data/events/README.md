# Event JSON specification and usage

## outline.json

This file provides the names and simple descriptions of the events to be shown on the main events page.
It also contains the name of the associated detail file whose information will be shown on the corresponding
event detail page.  The file contains an array of the following types of objects:

Event Description:
```
{
"date":"",
"title":"",
"subtitle":"",
"dataFile":""
}
```
This describes an event to display in the events list.  `date` specifies the text to display on the right hand side of
the events list.  `title` is the text for the link, and `subtitle` is a short description which follows the title in
a smaller font.  `dataFile` is the name of the detail json file for this event, without extensions and url escaped if
necessary (it is appended as is to a query string).

Empty Object (or more accurately an object with no name attribute)
```
{}
```
The empty object specifies that extra space should be added in the event list at this position.  The intended use is
to visually separate events into groupings by month, or otherwise.

This JSON is retrieved and used by `/pages/events.js`

## Detail JSON files

### ###This is under active development and is subject to change###

These files contain a more detailed description of events and supply the data for the event details page.  The name
is irrelevant provided the specification in outline.json is accurate.  This will be easiest if the filename does not
include spaces or special characters, as the specification requires no url escaping.  An event is described as
follows:

```
{
"title":"",
"date":"",
"time":"",
"location":"",
"description":""
}
```
The fields all fill the correspondingly labeled sections of `event_details.html`.  It may be useful to note that these
attributes may contain their own HTML, which may be particularly useful for the description.  In that case, however,
avoid placing the first section of text in a block element, as it will move it below the Description: label, which
would be inconsistent.

These files are used by `/pages/event_detail.js`.