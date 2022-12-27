// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineTwoToneSvg from '@ant-design/icons-svg/lib/asn/FirstlineTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineTwoTone: FirstlineTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineTwoToneSvg}></AntdIcon>;
};

FirstlineTwoTone.displayName = 'FirstlineTwoTone';
FirstlineTwoTone.inheritAttrs = false;
export default FirstlineTwoTone;