// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Money2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money2TwoTone: Money2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money2TwoToneSvg}></AntdIcon>;
};

Money2TwoTone.displayName = 'Money2TwoTone';
Money2TwoTone.inheritAttrs = false;
export default Money2TwoTone;