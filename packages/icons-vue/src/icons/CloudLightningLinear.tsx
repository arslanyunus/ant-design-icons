// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningLinearSvg from '@ant-design/icons-svg/lib/asn/CloudLightningLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningLinear: CloudLightningLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningLinearSvg}></AntdIcon>;
};

CloudLightningLinear.displayName = 'CloudLightningLinear';
CloudLightningLinear.inheritAttrs = false;
export default CloudLightningLinear;