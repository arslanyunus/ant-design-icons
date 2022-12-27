// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultLinearSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultLinear: DirectboxDefaultLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultLinearSvg}></AntdIcon>;
};

DirectboxDefaultLinear.displayName = 'DirectboxDefaultLinear';
DirectboxDefaultLinear.inheritAttrs = false;
export default DirectboxDefaultLinear;