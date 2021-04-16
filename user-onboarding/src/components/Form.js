import React from 'react';

function Form(props) {
    const { form, formErrors, inputChange, submit, disabled } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const returnValue = type === "checkbox" ? checked : value;
        inputChange(name, returnValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name 
                    <input 
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={form.name}
                        data-cy="name"
                    />
                </label>
                <div>{formErrors.name}</div>
                <label>
                    Email
                    <input 
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={form.email}
                        data-cy="email"
                    />
                </label>
                <div>{formErrors.email}</div>
                <label>
                    Password 
                    <input 
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={form.password}
                        data-cy="password"
                    />
                </label>
                <div>{formErrors.password}</div>
                <label>
                    Terms of Service
                    <input 
                        name="termsOfService"
                        type="checkbox"
                        onChange={onChange}
                        checked={form.termsOfService}
                        data-cy="termsOfService"
                    />
                </label>
                <div>{formErrors.termsOfService}</div>
                <button disabled={disabled} data-cy="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default Form;