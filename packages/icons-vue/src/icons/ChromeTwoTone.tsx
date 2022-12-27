// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeTwoToneSvg from '@ant-design/icons-svg/lib/asn/ChromeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeTwoTone: ChromeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeTwoToneSvg}></AntdIcon>;
};

ChromeTwoTone.displayName = 'ChromeTwoTone';
ChromeTwoTone.inheritAttrs = false;
export default ChromeTwoTone;