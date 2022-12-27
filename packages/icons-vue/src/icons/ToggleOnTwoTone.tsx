// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToggleOnTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnTwoTone: ToggleOnTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnTwoToneSvg}></AntdIcon>;
};

ToggleOnTwoTone.displayName = 'ToggleOnTwoTone';
ToggleOnTwoTone.inheritAttrs = false;
export default ToggleOnTwoTone;