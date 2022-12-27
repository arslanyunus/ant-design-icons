// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeLinearSvg from '@ant-design/icons-svg/lib/asn/CoffeeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeLinear: CoffeeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeLinearSvg}></AntdIcon>;
};

CoffeeLinear.displayName = 'CoffeeLinear';
CoffeeLinear.inheritAttrs = false;
export default CoffeeLinear;