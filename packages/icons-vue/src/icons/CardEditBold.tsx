// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardEditBoldSvg from '@ant-design/icons-svg/lib/asn/CardEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardEditBold: CardEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardEditBoldSvg}></AntdIcon>;
};

CardEditBold.displayName = 'CardEditBold';
CardEditBold.inheritAttrs = false;
export default CardEditBold;