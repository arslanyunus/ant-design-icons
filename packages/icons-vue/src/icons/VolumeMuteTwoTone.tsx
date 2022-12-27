// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteTwoTone: VolumeMuteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteTwoToneSvg}></AntdIcon>;
};

VolumeMuteTwoTone.displayName = 'VolumeMuteTwoTone';
VolumeMuteTwoTone.inheritAttrs = false;
export default VolumeMuteTwoTone;