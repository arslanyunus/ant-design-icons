// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToggleOffTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffTwoTone: ToggleOffTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffTwoToneSvg}></AntdIcon>;
};

ToggleOffTwoTone.displayName = 'ToggleOffTwoTone';
ToggleOffTwoTone.inheritAttrs = false;
export default ToggleOffTwoTone;