// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookBulkSvg from '@ant-design/icons-svg/lib/asn/BookBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookBulk: BookBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookBulkSvg}></AntdIcon>;
};

BookBulk.displayName = 'BookBulk';
BookBulk.inheritAttrs = false;
export default BookBulk;