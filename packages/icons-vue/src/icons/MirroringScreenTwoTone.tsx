// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenTwoToneSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenTwoTone: MirroringScreenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenTwoToneSvg}></AntdIcon>;
};

MirroringScreenTwoTone.displayName = 'MirroringScreenTwoTone';
MirroringScreenTwoTone.inheritAttrs = false;
export default MirroringScreenTwoTone;