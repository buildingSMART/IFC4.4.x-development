Axis Geometry
=============

Elements following a path provide an 'Axis' representation indicating a line segment or any arbitrary open bounded curve. Examples of such elements include walls, beams, columns, pipes, ducts, and cables. For elements that have a material profile set association indicating cross-section, a 'Body' representation may be generated based on the axis curve and material profiles. Curve styles may indicate particular colors, line thicknesses, and dash patterns for 2D rendering.

The representation identifier of the axis representation is:

* _IfcShapeRepresentation_._RepresentationIdentifier_ = 'Axis'

> EXAMPLE A two-dimensional bounded curve is used as the wall axis in standard walls, a three-dimensional bounded curve is used as the reference axis in standard columns.

```
concept {
    IfcProduct:Representation -> IfcProductDefinitionShape
    IfcProductDefinitionShape:Representations -> IfcShapeRepresentation
    IfcShapeRepresentation:ContextOfItems -> IfcGeometricRepresentationContext
    IfcShapeRepresentation:RepresentationIdentifier -> IfcLabel_0
    IfcShapeRepresentation:RepresentationType -> IfcLabel_1
    IfcLabel_0 -> constraint_0
    constraint_0[label="=Axis"]
    IfcShapeRepresentation:RepresentationIdentifier[binding="Identifier"]
    IfcShapeRepresentation:RepresentationType[binding="Type"]
    IfcShapeRepresentation:Items[binding="Items"]
}
```
