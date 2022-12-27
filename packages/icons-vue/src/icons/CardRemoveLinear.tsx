// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/CardRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemoveLinear: CardRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemoveLinearSvg}></AntdIcon>;
};

CardRemoveLinear.displayName = 'CardRemoveLinear';
CardRemoveLinear.inheritAttrs = false;
export default CardRemoveLinear;