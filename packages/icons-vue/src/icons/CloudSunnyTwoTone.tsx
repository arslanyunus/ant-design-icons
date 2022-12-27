// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyTwoTone: CloudSunnyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyTwoToneSvg}></AntdIcon>;
};

CloudSunnyTwoTone.displayName = 'CloudSunnyTwoTone';
CloudSunnyTwoTone.inheritAttrs = false;
export default CloudSunnyTwoTone;