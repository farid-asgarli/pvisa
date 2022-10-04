import { FormItemProps, Rule } from "antd/lib/form";
import { Envelope, Phone, User } from "phosphor-react";
import { Form } from "../models/components/Form";
import { Form as AntForm } from "antd";
import { useEffect, useState } from "react";
import { FormInstance, useForm } from "antd/lib/form/Form";
import { CountryPhoneInputValue } from "antd-country-phone-input";
import { toBase64 } from "./ToBase64";
import moment from "moment";

export type FileState = {
  [groupName: string]: { [key: string]: Indefinable<File> };
};

export type ReturnType = {
  /**
   * Ant form instance.
   */
  formInstance: FormInstance<any>;
  /**
   * Maps inputs based on their types and sets requirements, as well as default values.
   * @param fields Sets of fields to map.
   * @returns A collection of {@link JSX.Element} inputs.
   */
  mapFields(
    fields: FormsType.Field[],
    namePrefix?: string,
    props?: FormItemProps<any>
  ): JSX.Element[];
  mapFieldPerType(field: FormsType.Field): React.ReactNode;
};

/**
 * Provides a utility function to map fields based on their types and requirements.
 * @returns Field mapper utility and form instance.
 */
export function useFormManagement(
  appearance?: {
    fileInput?: "primary" | "secondary";
  },
  disabled: boolean = false
) {
  const [fileState, setFileState] = useState<FileState>({});
  const [choiceFields, setChoiceFields] = useState<
    Record<string, Record<string, string>[]>
  >({});

  const [formInstance] = useForm();
  /**
   * Triggers validation for the specified field.
   * @param groupName Groupname the field belongs to.
   * @param key Name of the field.
   */
  function validateField(groupName: string, key: string) {
    formInstance.validateFields([[groupName, key]]);
  }

  function resetFields() {
    formInstance.resetFields();
    setFileState({});
    setChoiceFields({});
  }

  function addChoiceField(field: FormsType.Field) {
    choiceFields[field.key] === undefined &&
      setChoiceFields((p) => ({
        ...p,
        [field.key]: field?.options ?? [],
      }));
  }

  function isFieldBoolean({ options, field_type }: FormsType.Field) {
    return (
      field_type === "choice" &&
      options &&
      options.find((x) => x.value === "No")
    );
  }

  /**
   * Inserts file into the state.
   * @param file File to insert
   * @param key Unqiue hashkey value
   */
  const addFile = (file: Indefinable<File>, key: string, groupName: string) => {
    setFileState((p) => ({
      ...p,
      [groupName]: { ...p[groupName], [key]: file },
    }));
    validateField(groupName, key);
  };

  /**
   * Removes file from the state.
   * @param key Haskey of the file to remove
   * @param shouldResetField Resets the input field to its default html value if set to `true`.
   */
  function removeFile(
    key: string,
    groupName: string,
    shouldResetField?: boolean
  ) {
    setFileState((p) => ({
      ...p,
      [groupName]: { ...p[groupName], [key]: undefined },
    }));

    if (shouldResetField) formInstance.resetFields([[groupName, key]]);
    validateField(groupName, key);
  }

  /**
   * Generates requirements based on the field.
   * @param field Field which to map the requirements from.
   * @returns Sets of rules to apply to `Form.Item`.
   */
  function mapRequirements(field: FormsType.Field, groupName: string): Rule[] {
    const rules: Rule[] = new Array<Rule>();
    const requiredMessage =
      field.required || field.is_required
        ? `${field.title.toLowerCase()} is required`
        : undefined;

    switch (field.field_type) {
      case "email":
        rules.push({
          type: "email",
          message: "Not a valid email",
        });
        break;
      case "file":
        rules.push({
          required:
            (field.required || field.is_required) &&
            !fileState[groupName]?.[field.key],
          message: requiredMessage,
        });
        break;
      case "tel":
        if (field.required || field.is_required)
          rules.push({
            validator: (_, val) => {
              if (val["phone"]) return Promise.resolve();
              else return Promise.reject("This field is required");
            },
          });
    }

    if ((field.required || field.is_required) && field.field_type !== "file") {
      rules.push({ required: true, message: requiredMessage });
    }

    return rules;
  }

  /**
   * Generates form field based on the provided argument.
   * @param field Field which to map the type from.
   * @returns Input ({@link JSX.Element})
   */
  function mapFieldPerType(
    field: FormsType.Field,
    groupName: string
  ): React.ReactNode {
    const { field_type, key, title, options } = field;

    const commonProps = { placeholder: title, disabled };

    switch (field_type) {
      case "date":
        return <Form.Date {...commonProps} />;
      case "email":
        return <Form.Input icon={Envelope} {...commonProps} type="email" />;
      case "file":
        return (
          <Form.File
            currentFile={fileState?.[groupName]?.[key]}
            onFileAdd={(file) => addFile(file, key, groupName)}
            onFileRemove={(shouldResetField) =>
              removeFile(key, groupName, shouldResetField)
            }
            title={title}
            inputStyle={appearance?.fileInput}
            disabled={disabled}
          />
        );
      case "tel":
        return <Form.Phone {...commonProps} icon={Phone} />;
      case "text":
        return <Form.Input type={"text"} icon={User} {...commonProps} />;
      case "text-area":
        return <Form.TextArea {...commonProps} />;
      case "choice":
      case "country":
        if (isFieldBoolean(field)) {
          addChoiceField(field);
          return (
            <Form.Choice
              checkedChildren={options?.[0].value}
              unCheckedChildren={options?.[1].value}
              description={title}
              disabled={disabled}
            />
          );
        }
        return (
          <Form.Select
            showSearch
            optionFilterProp="label"
            options={options?.map((o) => ({ label: o.value, value: o.key }))}
            {...commonProps}
          />
        );
    }
  }

  /**
   * Sets default value to the input.
   * @param field Field which to map the initial value from.
   * @returns Default value for the input field.
   */
  const mapInitialValue = (field: FormsType.Field, groupName: string) => {
    switch (field.field_type) {
      case "tel":
        return { short: "US", phone: field.filled_value ?? undefined };
      case "choice":
        if (isFieldBoolean(field)) return false;
        return undefined;
      case "date":
        if (field.filled_value) return moment(new Date(field.filled_value));
        return undefined;
      case "file":
        return undefined;
      default:
        return field.filled_value !== null ? field.filled_value : undefined;
    }
  };

  /**
   * Maps inputs based on their types and sets requirements, as well as default values.
   * @param fields Sets of fields to map.
   * @returns A collection of {@link JSX.Element} inputs.
   */
  function mapFields(
    fields: FormsType.Field[],
    namePrefix: string,
    props?: FormItemProps<any>
  ): JSX.Element[] {
    return fields.map((field) => (
      <AntForm.Item
        key={field.key}
        name={namePrefix ? [namePrefix, field.key] : field.key}
        initialValue={mapInitialValue(field, namePrefix)}
        rules={mapRequirements(field, namePrefix)}
        {...props}
      >
        {mapFieldPerType(field, namePrefix)}
      </AntForm.Item>
    ));
  }

  async function mapSubmittedField(
    fieldName: string,
    groupName: string,
    fieldValue: Indefinable<moment.Moment | CountryPhoneInputValue | string>
  ) {
    const file = await _isFileInput(fieldName, groupName);

    if (file !== null) return file;
    else if (fieldValue === undefined) return null;
    else if (_isPhoneInput(fieldValue))
      return `${fieldValue.code}${fieldValue.phone}`;
    else if (moment.isMoment(fieldValue)) return fieldValue.toDate();
    else if (typeof fieldValue === "boolean") {
      return choiceFields?.[fieldName]?.find(
        (x) => x.value === (fieldValue === true ? "Yes" : "No")
      )?.key;
    }
    return fieldValue;
  }

  async function mapSubmittedForm(formValues: {
    [groupName: string]: {
      [key: string]: Indefinable<
        moment.Moment | CountryPhoneInputValue | string
      >;
    };
  }) {
    const totalValues: { [key: string]: any }[] = [];
    for (const groupName in formValues) {
      const currentObject: { [key: string]: any } = {};

      for (const key in formValues[groupName]) {
        const fieldValue = await mapSubmittedField(
          key,
          groupName,
          formValues[groupName][key]
        );

        if (fieldValue) currentObject[key] = fieldValue;
      }
      totalValues.push(currentObject);
    }
    return totalValues;
  }

  function _isPhoneInput(value: any): value is CountryPhoneInputValue {
    return Object.hasOwn(value, "short");
  }

  async function _isFileInput(key: string, groupName: string) {
    const file = fileState[groupName]?.[key];
    if (file && typeof file !== "string") return await toBase64(file);
    return null;
  }

  return {
    mapFields,
    formInstance,
    mapSubmittedForm,
    addFile,
    resetFields,
  };
}
