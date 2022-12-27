// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleTwoTone: ToggleOnCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleTwoToneSvg}></AntdIcon>;
};

ToggleOnCircleTwoTone.displayName = 'ToggleOnCircleTwoTone';
ToggleOnCircleTwoTone.inheritAttrs = false;
export default ToggleOnCircleTwoTone;