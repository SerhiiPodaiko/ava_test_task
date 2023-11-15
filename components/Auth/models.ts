export interface FieldProps {
    name: string;
    type: string;
    label: string;
    required: boolean;
    minLength: number;
    message?: string;
    validate?: (value: string) => boolean | string;
}