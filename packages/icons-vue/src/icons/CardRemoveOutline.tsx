// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/CardRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardRemoveOutline: CardRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardRemoveOutlineSvg}></AntdIcon>;
};

CardRemoveOutline.displayName = 'CardRemoveOutline';
CardRemoveOutline.inheritAttrs = false;
export default CardRemoveOutline;