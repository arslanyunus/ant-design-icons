// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSavedLinearSvg from '@ant-design/icons-svg/lib/asn/BookSavedLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSavedLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSavedLinear: BookSavedLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSavedLinearSvg}></AntdIcon>;
};

BookSavedLinear.displayName = 'BookSavedLinear';
BookSavedLinear.inheritAttrs = false;
export default BookSavedLinear;