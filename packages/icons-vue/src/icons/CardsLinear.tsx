// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsLinearSvg from '@ant-design/icons-svg/lib/asn/CardsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsLinear: CardsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsLinearSvg}></AntdIcon>;
};

CardsLinear.displayName = 'CardsLinear';
CardsLinear.inheritAttrs = false;
export default CardsLinear;