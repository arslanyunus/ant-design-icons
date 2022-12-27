// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeLinearSvg from '@ant-design/icons-svg/lib/asn/CakeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeLinear: CakeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeLinearSvg}></AntdIcon>;
};

CakeLinear.displayName = 'CakeLinear';
CakeLinear.inheritAttrs = false;
export default CakeLinear;