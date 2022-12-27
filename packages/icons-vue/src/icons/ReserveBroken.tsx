// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveBrokenSvg from '@ant-design/icons-svg/lib/asn/ReserveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveBroken: ReserveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveBrokenSvg}></AntdIcon>;
};

ReserveBroken.displayName = 'ReserveBroken';
ReserveBroken.inheritAttrs = false;
export default ReserveBroken;