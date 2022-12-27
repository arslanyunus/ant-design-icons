// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningBulkSvg from '@ant-design/icons-svg/lib/asn/CloudLightningBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningBulk: CloudLightningBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningBulkSvg}></AntdIcon>;
};

CloudLightningBulk.displayName = 'CloudLightningBulk';
CloudLightningBulk.inheritAttrs = false;
export default CloudLightningBulk;