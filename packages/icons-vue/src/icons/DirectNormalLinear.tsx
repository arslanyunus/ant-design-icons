// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalLinearSvg from '@ant-design/icons-svg/lib/asn/DirectNormalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalLinear: DirectNormalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalLinearSvg}></AntdIcon>;
};

DirectNormalLinear.displayName = 'DirectNormalLinear';
DirectNormalLinear.inheritAttrs = false;
export default DirectNormalLinear;