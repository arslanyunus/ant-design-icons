// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeLinearSvg from '@ant-design/icons-svg/lib/asn/MicroscopeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeLinear: MicroscopeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeLinearSvg}></AntdIcon>;
};

MicroscopeLinear.displayName = 'MicroscopeLinear';
MicroscopeLinear.inheritAttrs = false;
export default MicroscopeLinear;