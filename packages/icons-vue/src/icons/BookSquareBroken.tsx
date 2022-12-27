// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/BookSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSquareBroken: BookSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSquareBrokenSvg}></AntdIcon>;
};

BookSquareBroken.displayName = 'BookSquareBroken';
BookSquareBroken.inheritAttrs = false;
export default BookSquareBroken;