// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookBrokenSvg from '@ant-design/icons-svg/lib/asn/BookBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookBroken: BookBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookBrokenSvg}></AntdIcon>;
};

BookBroken.displayName = 'BookBroken';
BookBroken.inheritAttrs = false;
export default BookBroken;