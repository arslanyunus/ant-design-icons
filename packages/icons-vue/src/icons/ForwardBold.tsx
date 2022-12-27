// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardBoldSvg from '@ant-design/icons-svg/lib/asn/ForwardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardBold: ForwardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardBoldSvg}></AntdIcon>;
};

ForwardBold.displayName = 'ForwardBold';
ForwardBold.inheritAttrs = false;
export default ForwardBold;