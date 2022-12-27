// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteBrokenSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteBroken: VolumeMuteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteBrokenSvg}></AntdIcon>;
};

VolumeMuteBroken.displayName = 'VolumeMuteBroken';
VolumeMuteBroken.inheritAttrs = false;
export default VolumeMuteBroken;