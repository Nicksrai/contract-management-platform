export function useBlueprintEngine(blueprint) {
  function getRenderableFields(values = {}, readOnly = false) {
    return blueprint.fields.map((field, index) => ({
      ...field,
      value: values[field.id] ?? "",
      readOnly,
      layoutIndex: index, // important for auto layout
    }));
  }

  return {
    getRenderableFields,
  };
}
