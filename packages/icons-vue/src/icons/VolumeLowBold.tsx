// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeLowBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowBold: VolumeLowBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowBoldSvg}></AntdIcon>;
};

VolumeLowBold.displayName = 'VolumeLowBold';
VolumeLowBold.inheritAttrs = false;
export default VolumeLowBold;