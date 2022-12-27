// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3BulkSvg from '@ant-design/icons-svg/lib/asn/Building3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3Bulk: Building3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3BulkSvg}></AntdIcon>;
};

Building3Bulk.displayName = 'Building3Bulk';
Building3Bulk.inheritAttrs = false;
export default Building3Bulk;