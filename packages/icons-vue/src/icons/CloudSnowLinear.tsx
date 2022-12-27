// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowLinearSvg from '@ant-design/icons-svg/lib/asn/CloudSnowLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowLinear: CloudSnowLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowLinearSvg}></AntdIcon>;
};

CloudSnowLinear.displayName = 'CloudSnowLinear';
CloudSnowLinear.inheritAttrs = false;
export default CloudSnowLinear;