// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeBrokenSvg from '@ant-design/icons-svg/lib/asn/CoffeeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeBroken: CoffeeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeBrokenSvg}></AntdIcon>;
};

CoffeeBroken.displayName = 'CoffeeBroken';
CoffeeBroken.inheritAttrs = false;
export default CoffeeBroken;