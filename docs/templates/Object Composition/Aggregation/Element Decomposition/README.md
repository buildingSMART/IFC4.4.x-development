Element Decomposition
=====================

Provision of an aggregation structure where the element, representing the composite, is decomposed into parts represented by other elements.

The composite then provides, if such concepts are in scope of the Model View Definition, exclusively the following:

* _Product Placement_ &mdash; the common object coordinate system to which the parts are placed relative

By default the following constraints apply to an element being decomposed by _Element Decomposition_:

* _Body Geometry_ &mdash; composite is constructed from the sum of the _Body Geometry_ of the parts;
* the composite shall not have an own _Body Geometry_, body geometry is provided at the parts;
* the composite shall not have an own _Material_ assignment, material is assigned to the parts.

> NOTE Use the sub template _Element Decomposition Required_ if any instance of the element is required to represent a composite with declared parts.

```
concept {
    IfcElement_0:IsDecomposedBy -> IfcRelAggregates:RelatingObject
    IfcRelAggregates:RelatedObjects -> IfcElement_1
    IfcElement_1:Name -> IfcLabel
    IfcElement_0:IsDecomposedBy[binding="IsDecomposedBy"]
    IfcRelAggregates:RelatedObjects[binding="RelatedObjects"]
    IfcElement_1:Name[binding="PartName"]
}
```
