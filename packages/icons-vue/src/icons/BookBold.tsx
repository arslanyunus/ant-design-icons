// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookBoldSvg from '@ant-design/icons-svg/lib/asn/BookBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookBold: BookBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookBoldSvg}></AntdIcon>;
};

BookBold.displayName = 'BookBold';
BookBold.inheritAttrs = false;
export default BookBold;