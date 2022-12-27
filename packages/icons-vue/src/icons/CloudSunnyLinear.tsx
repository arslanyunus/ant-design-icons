// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyLinearSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyLinear: CloudSunnyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyLinearSvg}></AntdIcon>;
};

CloudSunnyLinear.displayName = 'CloudSunnyLinear';
CloudSunnyLinear.inheritAttrs = false;
export default CloudSunnyLinear;