Assignment to Group
===================

The _Assignment to Group_ establishes the assignment of an object to a group, being an arbitrary collection of objects. It is the complementary concept template to _Group Assignment_ defining how objects are assigned by a group.

The grouping relationship does not apply any other meaning than grouping objects under some aspect. It is non-hierarchical, meaning that objects can be assigned to many groups, and it does not interfere with other relationship concepts, such as _Element Decomposition_. The grouping relationship allows for sub groups being grouped in groups.

```
concept {
    IfcObject:HasAssignments -> IfcRelAssignsToGroup:RelatedObjects
    IfcObject:HasAssignments[binding="IsAssigned"]
}
```
