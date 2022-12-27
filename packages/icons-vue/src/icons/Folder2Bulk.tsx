// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2BulkSvg from '@ant-design/icons-svg/lib/asn/Folder2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2Bulk: Folder2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2BulkSvg}></AntdIcon>;
};

Folder2Bulk.displayName = 'Folder2Bulk';
Folder2Bulk.inheritAttrs = false;
export default Folder2Bulk;