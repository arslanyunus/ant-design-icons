// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarOutlineSvg from '@ant-design/icons-svg/lib/asn/CarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarOutline: CarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarOutlineSvg}></AntdIcon>;
};

CarOutline.displayName = 'CarOutline';
CarOutline.inheritAttrs = false;
export default CarOutline;