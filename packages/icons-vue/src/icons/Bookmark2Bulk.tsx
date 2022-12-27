// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bookmark2BulkSvg from '@ant-design/icons-svg/lib/asn/Bookmark2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bookmark2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bookmark2Bulk: Bookmark2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bookmark2BulkSvg}></AntdIcon>;
};

Bookmark2Bulk.displayName = 'Bookmark2Bulk';
Bookmark2Bulk.inheritAttrs = false;
export default Bookmark2Bulk;