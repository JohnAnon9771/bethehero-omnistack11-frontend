import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

export default function TextArea({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea defaultValue={defaultValue} ref={inputRef} {...rest} />;
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
};
