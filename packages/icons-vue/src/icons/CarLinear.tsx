// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarLinearSvg from '@ant-design/icons-svg/lib/asn/CarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarLinear: CarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarLinearSvg}></AntdIcon>;
};

CarLinear.displayName = 'CarLinear';
CarLinear.inheritAttrs = false;
export default CarLinear;