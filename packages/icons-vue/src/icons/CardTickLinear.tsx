// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickLinearSvg from '@ant-design/icons-svg/lib/asn/CardTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickLinear: CardTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickLinearSvg}></AntdIcon>;
};

CardTickLinear.displayName = 'CardTickLinear';
CardTickLinear.inheritAttrs = false;
export default CardTickLinear;