// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSavedBoldSvg from '@ant-design/icons-svg/lib/asn/BookSavedBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSavedBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSavedBold: BookSavedBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSavedBoldSvg}></AntdIcon>;
};

BookSavedBold.displayName = 'BookSavedBold';
BookSavedBold.inheritAttrs = false;
export default BookSavedBold;