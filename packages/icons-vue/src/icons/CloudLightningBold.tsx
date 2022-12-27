// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningBoldSvg from '@ant-design/icons-svg/lib/asn/CloudLightningBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningBold: CloudLightningBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningBoldSvg}></AntdIcon>;
};

CloudLightningBold.displayName = 'CloudLightningBold';
CloudLightningBold.inheritAttrs = false;
export default CloudLightningBold;