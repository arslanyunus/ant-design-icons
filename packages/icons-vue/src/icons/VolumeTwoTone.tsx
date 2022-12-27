// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeTwoToneSvg from '@ant-design/icons-svg/lib/asn/VolumeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeTwoTone: VolumeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeTwoToneSvg}></AntdIcon>;
};

VolumeTwoTone.displayName = 'VolumeTwoTone';
VolumeTwoTone.inheritAttrs = false;
export default VolumeTwoTone;