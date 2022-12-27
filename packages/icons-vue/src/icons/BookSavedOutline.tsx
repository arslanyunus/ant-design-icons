// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSavedOutlineSvg from '@ant-design/icons-svg/lib/asn/BookSavedOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSavedOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSavedOutline: BookSavedOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSavedOutlineSvg}></AntdIcon>;
};

BookSavedOutline.displayName = 'BookSavedOutline';
BookSavedOutline.inheritAttrs = false;
export default BookSavedOutline;