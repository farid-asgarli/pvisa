import Title from "antd/lib/typography/Title";
import { CloudArrowUp, Folder } from "phosphor-react";
import { useRef } from "react";
import { StringExtensions } from "../../../extensions/String";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import { DownloadFile } from "../../../utils/DownloadFile";
import Paragraph from "../../Paragraph/Paragraph";
import styles from "./File.module.css";
const File: typeof Form.File = ({
  onFileRemove: fileRemoveEvent,
  onFileAdd: fileAddEvent,
  currentFile,
  className,
  children,
  onChange,
  onDrop,
  value,
  style,
  title,
  inputStyle = "primary",
  ...props
}) => {
  const acceptedFileTypes = "application/pdf;image/png;image/jpeg;image/jpg";

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) return;

    onChange?.(event);
    const file: Indefinable<File> = event.target.files?.[0];
    if (file && checkIfFileIsValid(file)) fileAddEvent(file);
    else fileRemoveEvent(true);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const checkIfFileIsValid = (file: File, fileSize = 10): boolean => {
    const isFileSizeValid = fileSize >= file.size / (1024 * 1024);
    const isFileTypeValid = acceptedFileTypes.includes(file.type);
    return isFileSizeValid && isFileTypeValid;
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    if (props.disabled) return;

    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer?.files?.[0];

    if (file && checkIfFileIsValid(file)) {
      fileAddEvent(file);
      onDrop?.(e);

      // Sets file input, currently not working.
      // if (inputRef.current) inputRef.current.files = e.dataTransfer.files;
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > = {
    ref: inputRef,
    id: props.name,
    ...props,
    onChange: onChangeHandler,
    value: value ?? StringExtensions.Empty,
    type: "file",
    className: styles.Input,
    accept: acceptedFileTypes,
  };

  const containerProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > = {
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    onDragOver: handleDrag,
    onDrop: handleDrop,
  };

  const Primary = () => (
    <div
      {...containerProps}
      className={concatStyles(styles.Container, styles.Primary)}
    >
      <div className={styles.Icon}>
        <CloudArrowUp size={32} weight="light" />
      </div>
      <div className={styles.Description}>
        {currentFile ? (
          <Paragraph
            onClick={async () => await DownloadFile(currentFile)}
            ellipsis={1}
            className={styles.Title}
          >
            {typeof currentFile === "string" ? currentFile : currentFile.name}
          </Paragraph>
        ) : (
          <>
            <span className={styles.Title}>
              Select a file or drag and drop here
            </span>
            <span className={styles.Subtitle}>
              JPG, PNG or PDF, file size no more than 10MB
            </span>
          </>
        )}
      </div>
      {currentFile ? (
        <button
          disabled={props.disabled}
          className={concatStyles(styles.Button, styles.Remove)}
          onClick={() => fileRemoveEvent(true)}
        >
          Remove fıle
        </button>
      ) : (
        <button
          disabled={props.disabled}
          onClick={() => inputRef.current?.click()}
          className={styles.Button}
        >
          Select fıle
        </button>
      )}
    </div>
  );

  const Secondary = () => (
    <div
      {...containerProps}
      className={concatStyles(styles.Container, styles.Secondary)}
    >
      <div className={styles.Inner}>
        <div className={styles.IconWrapper}>
          <Folder className={styles.Icon} />
        </div>
        {currentFile ? (
          <Paragraph
            onClick={async () => await DownloadFile(currentFile)}
            ellipsis={1}
            className={styles.Title}
          >
            {typeof currentFile === "string" ? currentFile : currentFile.name}
          </Paragraph>
        ) : (
          <>
            <div className={styles.Content}>
              Drag your documents, photos or video here to start uploding.
            </div>
            <div className={styles.DividerWrapper}>
              <span className={styles.Divider}>OR</span>
            </div>
          </>
        )}
        <div className={styles.Bottom}>
          {currentFile ? (
            <button
              disabled={props.disabled}
              className={concatStyles(styles.Button, styles.Remove)}
              onClick={() => fileRemoveEvent(true)}
            >
              Remove fıle
            </button>
          ) : (
            <>
              <button
                disabled={props.disabled}
                onClick={() => inputRef.current?.click()}
                className={styles.Button}
              >
                Upload
              </button>
              <button
                disabled={props.disabled}
                onClick={() => inputRef.current?.click()}
                className={styles.Button}
              >
                Take picture
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={concatStyles(styles.Body, className)} style={style}>
      <Title level={5}>{title}</Title>
      {inputStyle === "primary" ? <Primary /> : <Secondary />}
      <input {...inputProps} />
    </div>
  );
};
export default File;
