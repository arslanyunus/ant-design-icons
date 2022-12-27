// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookmarkBrokenSvg from '@ant-design/icons-svg/lib/asn/BookmarkBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookmarkBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookmarkBroken: BookmarkBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookmarkBrokenSvg}></AntdIcon>;
};

BookmarkBroken.displayName = 'BookmarkBroken';
BookmarkBroken.inheritAttrs = false;
export default BookmarkBroken;