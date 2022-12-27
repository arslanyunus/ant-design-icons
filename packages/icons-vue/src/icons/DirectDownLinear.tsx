// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownLinearSvg from '@ant-design/icons-svg/lib/asn/DirectDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownLinear: DirectDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownLinearSvg}></AntdIcon>;
};

DirectDownLinear.displayName = 'DirectDownLinear';
DirectDownLinear.inheritAttrs = false;
export default DirectDownLinear;