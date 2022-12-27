// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookmarkBoldSvg from '@ant-design/icons-svg/lib/asn/BookmarkBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookmarkBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookmarkBold: BookmarkBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookmarkBoldSvg}></AntdIcon>;
};

BookmarkBold.displayName = 'BookmarkBold';
BookmarkBold.inheritAttrs = false;
export default BookmarkBold;