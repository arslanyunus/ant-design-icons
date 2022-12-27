// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Warning2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2TwoTone: Warning2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2TwoToneSvg}></AntdIcon>;
};

Warning2TwoTone.displayName = 'Warning2TwoTone';
Warning2TwoTone.inheritAttrs = false;
export default Warning2TwoTone;