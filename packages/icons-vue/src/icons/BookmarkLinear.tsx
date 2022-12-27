// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookmarkLinearSvg from '@ant-design/icons-svg/lib/asn/BookmarkLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookmarkLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookmarkLinear: BookmarkLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookmarkLinearSvg}></AntdIcon>;
};

BookmarkLinear.displayName = 'BookmarkLinear';
BookmarkLinear.inheritAttrs = false;
export default BookmarkLinear;