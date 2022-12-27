// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSquareLinearSvg from '@ant-design/icons-svg/lib/asn/BookSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSquareLinear: BookSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSquareLinearSvg}></AntdIcon>;
};

BookSquareLinear.displayName = 'BookSquareLinear';
BookSquareLinear.inheritAttrs = false;
export default BookSquareLinear;