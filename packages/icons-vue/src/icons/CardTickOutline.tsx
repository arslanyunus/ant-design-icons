// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardTickOutlineSvg from '@ant-design/icons-svg/lib/asn/CardTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardTickOutline: CardTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardTickOutlineSvg}></AntdIcon>;
};

CardTickOutline.displayName = 'CardTickOutline';
CardTickOutline.inheritAttrs = false;
export default CardTickOutline;