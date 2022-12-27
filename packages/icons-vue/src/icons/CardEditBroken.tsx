// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditBrokenSvg from '@ant-design/icons-svg/lib/asn/CardEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditBroken: CardEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditBrokenSvg}></AntdIcon>;
};

CardEditBroken.displayName = 'CardEditBroken';
CardEditBroken.inheritAttrs = false;
export default CardEditBroken;