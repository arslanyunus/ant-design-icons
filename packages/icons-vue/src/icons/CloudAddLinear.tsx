// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddLinearSvg from '@ant-design/icons-svg/lib/asn/CloudAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddLinear: CloudAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddLinearSvg}></AntdIcon>;
};

CloudAddLinear.displayName = 'CloudAddLinear';
CloudAddLinear.inheritAttrs = false;
export default CloudAddLinear;