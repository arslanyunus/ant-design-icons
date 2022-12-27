// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddBulkSvg from '@ant-design/icons-svg/lib/asn/CloudAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddBulk: CloudAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddBulkSvg}></AntdIcon>;
};

CloudAddBulk.displayName = 'CloudAddBulk';
CloudAddBulk.inheritAttrs = false;
export default CloudAddBulk;