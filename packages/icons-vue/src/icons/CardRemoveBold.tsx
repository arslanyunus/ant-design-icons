// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/CardRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemoveBold: CardRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemoveBoldSvg}></AntdIcon>;
};

CardRemoveBold.displayName = 'CardRemoveBold';
CardRemoveBold.inheritAttrs = false;
export default CardRemoveBold;