import React, { InputHTMLAttributes } from 'react';
import { Form, InputGroup, FormControlProps } from 'react-bootstrap';
import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';

// Create a type that excludes 'value' from InputHTMLAttributes
type InputPropsWithoutValue = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'size' | 'name'>;

// Create a type that's compatible with both InputPropsWithoutValue and FormControlProps
type CompatibleFormControlProps = InputPropsWithoutValue & FormControlProps;

type FormInputProps<TFieldValues extends FieldValues = FieldValues> = InputPropsWithoutValue & {
    startIcon?: React.ReactNode;
    label?: string;
    type?: string;
    name: Path<TFieldValues>;
    placeholder?: string;
    register?: UseFormRegister<TFieldValues>;
    errors?: FieldErrors<TFieldValues>;
    className?: string;
    labelClassName?: string;
    containerClass?: string;
    action?: React.ReactNode;
    rows?: string | number;
    size?: FormControlProps['size'];
};

const TextualInput = <TFieldValues extends FieldValues = FieldValues>({
    type,
    name,
    placeholder,
    register,
    errors,
    className,
    rows,
    size,
    ...otherProps
}: FormInputProps<TFieldValues>) => {
    const registerProps = register ? register(name) : {};

    // Create a props object that's compatible with Form.Control
    const controlProps: CompatibleFormControlProps = {
        type,
        placeholder,
        id: name,
        className,
        isInvalid: !!(errors && errors[name]),
        ...(type === 'textarea' ? { rows } : {}),
        ...(size ? { size } : {}),
        ...registerProps,
        ...otherProps,
    };

    return (
        <>
            <Form.Control {...controlProps} />
            {errors && errors[name] && (
                <Form.Control.Feedback type="invalid" className="d-block">
                    {errors[name]?.message?.toString() || 'Error'}
                </Form.Control.Feedback>
            )}
        </>
    );
};

const FormInput = <TFieldValues extends FieldValues = FieldValues>({
    startIcon,
    label,
    type = 'text',
    name,
    placeholder,
    register,
    errors,
    className,
    labelClassName,
    containerClass,
    action,
    rows,
    size,
    ...otherProps
}: FormInputProps<TFieldValues>) => {
    return (
        <Form.Group className={containerClass}>
            {label && <Form.Label className={labelClassName}>{label}</Form.Label>}
            {startIcon ? (
                <InputGroup>
                    <InputGroup.Text>{startIcon}</InputGroup.Text>
                    <TextualInput<TFieldValues>
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        register={register}
                        errors={errors}
                        className={className}
                        rows={rows}
                        size={size}
                        {...otherProps}
                    />
                </InputGroup>
            ) : (
                <TextualInput<TFieldValues>
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    register={register}
                    errors={errors}
                    className={className}
                    rows={rows}
                    size={size}
                    {...otherProps}
                />
            )}
            {action}
        </Form.Group>
    );
};

export default FormInput;
