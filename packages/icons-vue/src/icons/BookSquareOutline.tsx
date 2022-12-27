// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/BookSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSquareOutline: BookSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSquareOutlineSvg}></AntdIcon>;
};

BookSquareOutline.displayName = 'BookSquareOutline';
BookSquareOutline.inheritAttrs = false;
export default BookSquareOutline;