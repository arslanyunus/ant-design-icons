// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftLinearSvg from '@ant-design/icons-svg/lib/asn/DirectLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftLinear: DirectLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftLinearSvg}></AntdIcon>;
};

DirectLeftLinear.displayName = 'DirectLeftLinear';
DirectLeftLinear.inheritAttrs = false;
export default DirectLeftLinear;