// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossTwoTone: CloudCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossTwoToneSvg}></AntdIcon>;
};

CloudCrossTwoTone.displayName = 'CloudCrossTwoTone';
CloudCrossTwoTone.inheritAttrs = false;
export default CloudCrossTwoTone;