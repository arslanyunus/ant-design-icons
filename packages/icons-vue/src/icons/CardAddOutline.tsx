// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardAddOutlineSvg from '@ant-design/icons-svg/lib/asn/CardAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardAddOutline: CardAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardAddOutlineSvg}></AntdIcon>;
};

CardAddOutline.displayName = 'CardAddOutline';
CardAddOutline.inheritAttrs = false;
export default CardAddOutline;