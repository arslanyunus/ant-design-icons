// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarBrokenSvg from '@ant-design/icons-svg/lib/asn/CarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarBroken: CarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarBrokenSvg}></AntdIcon>;
};

CarBroken.displayName = 'CarBroken';
CarBroken.inheritAttrs = false;
export default CarBroken;