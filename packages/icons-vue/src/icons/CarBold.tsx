// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarBoldSvg from '@ant-design/icons-svg/lib/asn/CarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarBold: CarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarBoldSvg}></AntdIcon>;
};

CarBold.displayName = 'CarBold';
CarBold.inheritAttrs = false;
export default CarBold;