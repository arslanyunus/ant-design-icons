// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardReceiveOutlineSvg from '@ant-design/icons-svg/lib/asn/CardReceiveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardReceiveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardReceiveOutline: CardReceiveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardReceiveOutlineSvg}></AntdIcon>;
};

CardReceiveOutline.displayName = 'CardReceiveOutline';
CardReceiveOutline.inheritAttrs = false;
export default CardReceiveOutline;