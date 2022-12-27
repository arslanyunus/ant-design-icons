// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenBoldSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenBold: MirroringScreenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenBoldSvg}></AntdIcon>;
};

MirroringScreenBold.displayName = 'MirroringScreenBold';
MirroringScreenBold.inheritAttrs = false;
export default MirroringScreenBold;