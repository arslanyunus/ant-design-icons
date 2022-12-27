// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLinearSvg from '@ant-design/icons-svg/lib/asn/DirectLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLinear: DirectLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLinearSvg}></AntdIcon>;
};

DirectLinear.displayName = 'DirectLinear';
DirectLinear.inheritAttrs = false;
export default DirectLinear;