// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookmarkOutlineSvg from '@ant-design/icons-svg/lib/asn/BookmarkOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookmarkOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookmarkOutline: BookmarkOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookmarkOutlineSvg}></AntdIcon>;
};

BookmarkOutline.displayName = 'BookmarkOutline';
BookmarkOutline.inheritAttrs = false;
export default BookmarkOutline;