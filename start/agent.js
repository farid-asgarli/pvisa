function fetchTemplateVariables(url, languageIds, runtimeConfig) {
  try {
    const templateVariableObject = {};

    languageIds.forEach((x) => {
      fetch(`${url}${x}/template_variables`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((x) => x.json())
        .then((data) => {
          templateVariableObject[x] = data["template_variables"];
        });
    });

    runtimeConfig["template_variables"] = templateVariableObject;
    return jsonResponse;
  } catch (error) {}
}

module.exports = { fetchTemplateVariables };
