// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudLightningBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningBroken: CloudLightningBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningBrokenSvg}></AntdIcon>;
};

CloudLightningBroken.displayName = 'CloudLightningBroken';
CloudLightningBroken.inheritAttrs = false;
export default CloudLightningBroken;