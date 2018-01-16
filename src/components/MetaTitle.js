import React from 'react';
import {colors} from '../theme';

const MetaTitle = ({children, cssProps = {}, onDark = false}) => (
  <div
    css={{
      color: onDark ? colors.subtleOnDark : colors.subtle,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...cssProps,
    }}>
    {children}
  </div>
);

export default MetaTitle;
