// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookmarkTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookmarkTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookmarkTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookmarkTwoTone: BookmarkTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookmarkTwoToneSvg}></AntdIcon>;
};

BookmarkTwoTone.displayName = 'BookmarkTwoTone';
BookmarkTwoTone.inheritAttrs = false;
export default BookmarkTwoTone;