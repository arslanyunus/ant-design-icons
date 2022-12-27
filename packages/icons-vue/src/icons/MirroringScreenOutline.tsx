// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenOutlineSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenOutline: MirroringScreenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenOutlineSvg}></AntdIcon>;
};

MirroringScreenOutline.displayName = 'MirroringScreenOutline';
MirroringScreenOutline.inheritAttrs = false;
export default MirroringScreenOutline;