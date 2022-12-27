// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashBoldSvg from '@ant-design/icons-svg/lib/asn/CardSlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashBold: CardSlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashBoldSvg}></AntdIcon>;
};

CardSlashBold.displayName = 'CardSlashBold';
CardSlashBold.inheritAttrs = false;
export default CardSlashBold;