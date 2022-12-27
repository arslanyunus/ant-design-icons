// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyBroken: CloudSunnyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyBrokenSvg}></AntdIcon>;
};

CloudSunnyBroken.displayName = 'CloudSunnyBroken';
CloudSunnyBroken.inheritAttrs = false;
export default CloudSunnyBroken;