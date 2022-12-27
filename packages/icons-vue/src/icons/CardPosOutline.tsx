// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardPosOutlineSvg from '@ant-design/icons-svg/lib/asn/CardPosOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardPosOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardPosOutline: CardPosOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardPosOutlineSvg}></AntdIcon>;
};

CardPosOutline.displayName = 'CardPosOutline';
CardPosOutline.inheritAttrs = false;
export default CardPosOutline;