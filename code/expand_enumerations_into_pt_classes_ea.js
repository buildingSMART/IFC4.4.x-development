!INC Local Scripts.EAConstants-JScript

/*
 * Script Name: expand_enumerations_into_pt_classes_ea.js
 * Author: thomas@aecgeeks.com
 */

elementsByPackages = {};

function iterateEnumerationLiterals(enumerationElement) {
    // Check if the found element is an enumeration
	
    if (enumerationElement.Type != "enumeration" && enumerationElement.StereotypeEx.indexOf('enumeration') === -1) {
        Session.Output("'" + enumerationElement.Name + "' is not an enumeration, but " + enumerationElement.Type + " / " + enumerationElement.StereotypeEx);
        return;
    }

	r = []
    // Iterate over the attributes of the enumeration (these are the literals)
    for (var i = 0; i < enumerationElement.Attributes.Count; i++) {
        var literal = enumerationElement.Attributes.GetAt(i);
        r.push(literal.Name);
    }
	return r;
}

function findElementByName(elementName) {
    // Get the current repository
    var repository = Repository;

    // Construct the SQL query to find the element by name
    var sqlQuery = "SELECT Object_ID FROM t_object WHERE Name = '" + elementName + "'";

    // Execute the query and get the result as a collection of elements
    var elementSet = repository.GetElementSet(sqlQuery, 2); // 2 means the result is a collection of element GUIDs

    // Check if any element is found
    if (elementSet.Count > 0) {
        var element = elementSet.GetAt(0);
        Session.Output("Element found: " + element.Name + " (GUID: " + element.ElementGUID + ")");
        return element;
    } else {
        Session.Output("No element found with the name: " + elementName);
        return null;
    }
}

function main()
{	
	let cl = "IfcPlateTypeEnum";
	let C = findElementByName(cl);
	for (let ch of iterateEnumerationLiterals(C)) {
		if (findElementByName(`${cl}.${ch}`) === null) {
			let P = Repository.GetPackageByID(C.PackageID);
			let E = P.Elements.AddNew(`${cl}.${ch}`, 'Class');
			E.StereotypeEx += ",PredefinedType";
			E.Update();
			
			// Create a new realization connector between the client and supplier
			var newConnector = C.Connectors.AddNew("Realization", "Realization");
			newConnector.SupplierID = E.ElementID;
			newConnector.Update();
		
			// Refresh the elements to show the new connector
			E.Update();
			C.Update();
		}
	}
}

main();