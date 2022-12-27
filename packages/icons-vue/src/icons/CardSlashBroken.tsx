// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashBrokenSvg from '@ant-design/icons-svg/lib/asn/CardSlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashBroken: CardSlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashBrokenSvg}></AntdIcon>;
};

CardSlashBroken.displayName = 'CardSlashBroken';
CardSlashBroken.inheritAttrs = false;
export default CardSlashBroken;