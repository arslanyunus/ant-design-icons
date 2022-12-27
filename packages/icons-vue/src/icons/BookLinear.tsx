// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookLinearSvg from '@ant-design/icons-svg/lib/asn/BookLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookLinear: BookLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookLinearSvg}></AntdIcon>;
};

BookLinear.displayName = 'BookLinear';
BookLinear.inheritAttrs = false;
export default BookLinear;