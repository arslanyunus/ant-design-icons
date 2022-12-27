// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenLinearSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenLinear: MirroringScreenLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenLinearSvg}></AntdIcon>;
};

MirroringScreenLinear.displayName = 'MirroringScreenLinear';
MirroringScreenLinear.inheritAttrs = false;
export default MirroringScreenLinear;