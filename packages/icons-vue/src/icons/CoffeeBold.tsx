// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeBoldSvg from '@ant-design/icons-svg/lib/asn/CoffeeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeBold: CoffeeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeBoldSvg}></AntdIcon>;
};

CoffeeBold.displayName = 'CoffeeBold';
CoffeeBold.inheritAttrs = false;
export default CoffeeBold;