// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleTwoTone: ToggleOffCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleTwoToneSvg}></AntdIcon>;
};

ToggleOffCircleTwoTone.displayName = 'ToggleOffCircleTwoTone';
ToggleOffCircleTwoTone.inheritAttrs = false;
export default ToggleOffCircleTwoTone;