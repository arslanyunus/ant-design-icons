// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReserveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveTwoTone: ReserveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveTwoToneSvg}></AntdIcon>;
};

ReserveTwoTone.displayName = 'ReserveTwoTone';
ReserveTwoTone.inheritAttrs = false;
export default ReserveTwoTone;