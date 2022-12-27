// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardsOutlineSvg from '@ant-design/icons-svg/lib/asn/CardsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardsOutline: CardsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardsOutlineSvg}></AntdIcon>;
};

CardsOutline.displayName = 'CardsOutline';
CardsOutline.inheritAttrs = false;
export default CardsOutline;