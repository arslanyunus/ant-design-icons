// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditOutlineSvg from '@ant-design/icons-svg/lib/asn/CardEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditOutline: CardEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditOutlineSvg}></AntdIcon>;
};

CardEditOutline.displayName = 'CardEditOutline';
CardEditOutline.inheritAttrs = false;
export default CardEditOutline;