import * as React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time" | "datetime" | "color";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=Input.d.ts.map