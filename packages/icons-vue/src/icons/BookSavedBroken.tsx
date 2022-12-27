// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSavedBrokenSvg from '@ant-design/icons-svg/lib/asn/BookSavedBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSavedBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSavedBroken: BookSavedBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSavedBrokenSvg}></AntdIcon>;
};

BookSavedBroken.displayName = 'BookSavedBroken';
BookSavedBroken.inheritAttrs = false;
export default BookSavedBroken;