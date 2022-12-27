// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteBoldSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteBold: VolumeMuteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteBoldSvg}></AntdIcon>;
};

VolumeMuteBold.displayName = 'VolumeMuteBold';
VolumeMuteBold.inheritAttrs = false;
export default VolumeMuteBold;