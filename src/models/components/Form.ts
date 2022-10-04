import { DatePickerProps, InputProps, SelectProps, SwitchProps } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { CountryPhoneInputProps } from "antd-country-phone-input";
import React from "react";
import Input from "../../components/Form/Input/Input";
import TextArea from "../../components/Form/TextArea/TextArea";
import File from "../../components/Form/File/File";
import Date from "../../components/Form/Date/Date";
import Phone from "../../components/Form/Phone/Phone";
import Choice from "../../components/Form/Choice/Choice";
import { DefaultOptionType } from "antd/lib/select";
import Select from "../../components/Form/Select/Select";

type FormComponent = {
  Choice: React.FC<
    SwitchProps & {
      description?: React.ReactNode;
    }
  >;
  Date: React.FC<DatePickerProps>;
  File: React.FC<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & {
      onFileAdd: (file: File) => void;
      onFileRemove: (shouldResetField?: boolean) => void;
      currentFile: Indefinable<File> | string;
      inputStyle?: "primary" | "secondary";
    }
  >;
  Input: React.FC<
    InputProps & {
      icon?: Indefinable<IconType>;
      type?: DefaultInputTypes;
    }
  >;
  Phone: React.FC<
    CountryPhoneInputProps & {
      icon?: Indefinable<IconType>;
    }
  >;
  Select: React.FC<SelectProps<string, DefaultOptionType>>;
  TextArea: React.FC<TextAreaProps>;
};

export const Form: FormComponent = {
  Choice,
  Date,
  File,
  Input,
  Select,
  Phone,
  TextArea,
};
