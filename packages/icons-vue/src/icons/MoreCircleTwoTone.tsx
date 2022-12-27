// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoreCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreCircleTwoTone: MoreCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreCircleTwoToneSvg}></AntdIcon>;
};

MoreCircleTwoTone.displayName = 'MoreCircleTwoTone';
MoreCircleTwoTone.inheritAttrs = false;
export default MoreCircleTwoTone;