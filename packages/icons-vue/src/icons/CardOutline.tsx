// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardOutlineSvg from '@ant-design/icons-svg/lib/asn/CardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardOutline: CardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardOutlineSvg}></AntdIcon>;
};

CardOutline.displayName = 'CardOutline';
CardOutline.inheritAttrs = false;
export default CardOutline;