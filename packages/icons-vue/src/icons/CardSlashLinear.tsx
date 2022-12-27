// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CardSlashLinearSvg from '@ant-design/icons-svg/lib/asn/CardSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CardSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CardSlashLinear: CardSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CardSlashLinearSvg}></AntdIcon>;
};

CardSlashLinear.displayName = 'CardSlashLinear';
CardSlashLinear.inheritAttrs = false;
export default CardSlashLinear;