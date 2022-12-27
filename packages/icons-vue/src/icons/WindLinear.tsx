// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindLinearSvg from '@ant-design/icons-svg/lib/asn/WindLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindLinear: WindLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindLinearSvg}></AntdIcon>;
};

WindLinear.displayName = 'WindLinear';
WindLinear.inheritAttrs = false;
export default WindLinear;