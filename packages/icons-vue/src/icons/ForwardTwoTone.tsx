// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardTwoToneSvg from '@ant-design/icons-svg/lib/asn/ForwardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardTwoTone: ForwardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardTwoToneSvg}></AntdIcon>;
};

ForwardTwoTone.displayName = 'ForwardTwoTone';
ForwardTwoTone.inheritAttrs = false;
export default ForwardTwoTone;