// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardBrokenSvg from '@ant-design/icons-svg/lib/asn/ForwardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardBroken: ForwardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardBrokenSvg}></AntdIcon>;
};

ForwardBroken.displayName = 'ForwardBroken';
ForwardBroken.inheritAttrs = false;
export default ForwardBroken;