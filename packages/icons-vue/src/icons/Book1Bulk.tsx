// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1BulkSvg from '@ant-design/icons-svg/lib/asn/Book1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1Bulk: Book1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1BulkSvg}></AntdIcon>;
};

Book1Bulk.displayName = 'Book1Bulk';
Book1Bulk.inheritAttrs = false;
export default Book1Bulk;