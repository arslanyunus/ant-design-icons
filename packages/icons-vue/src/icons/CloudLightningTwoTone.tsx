// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudLightningTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudLightningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudLightningTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudLightningTwoTone: CloudLightningTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudLightningTwoToneSvg}></AntdIcon>;
};

CloudLightningTwoTone.displayName = 'CloudLightningTwoTone';
CloudLightningTwoTone.inheritAttrs = false;
export default CloudLightningTwoTone;