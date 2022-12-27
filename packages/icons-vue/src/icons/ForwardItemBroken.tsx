// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemBrokenSvg from '@ant-design/icons-svg/lib/asn/ForwardItemBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemBroken: ForwardItemBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemBrokenSvg}></AntdIcon>;
};

ForwardItemBroken.displayName = 'ForwardItemBroken';
ForwardItemBroken.inheritAttrs = false;
export default ForwardItemBroken;