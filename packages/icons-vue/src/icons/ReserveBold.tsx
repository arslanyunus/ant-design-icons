// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveBoldSvg from '@ant-design/icons-svg/lib/asn/ReserveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveBold: ReserveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveBoldSvg}></AntdIcon>;
};

ReserveBold.displayName = 'ReserveBold';
ReserveBold.inheritAttrs = false;
export default ReserveBold;