// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossLinearSvg from '@ant-design/icons-svg/lib/asn/CloudCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossLinear: CloudCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossLinearSvg}></AntdIcon>;
};

CloudCrossLinear.displayName = 'CloudCrossLinear';
CloudCrossLinear.inheritAttrs = false;
export default CloudCrossLinear;