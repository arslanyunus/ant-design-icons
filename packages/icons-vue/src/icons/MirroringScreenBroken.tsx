// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenBrokenSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenBroken: MirroringScreenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenBrokenSvg}></AntdIcon>;
};

MirroringScreenBroken.displayName = 'MirroringScreenBroken';
MirroringScreenBroken.inheritAttrs = false;
export default MirroringScreenBroken;