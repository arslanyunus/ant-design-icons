// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4BulkSvg from '@ant-design/icons-svg/lib/asn/Building4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4Bulk: Building4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4BulkSvg}></AntdIcon>;
};

Building4Bulk.displayName = 'Building4Bulk';
Building4Bulk.inheritAttrs = false;
export default Building4Bulk;