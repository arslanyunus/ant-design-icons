// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemBoldSvg from '@ant-design/icons-svg/lib/asn/ForwardItemBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemBold: ForwardItemBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemBoldSvg}></AntdIcon>;
};

ForwardItemBold.displayName = 'ForwardItemBold';
ForwardItemBold.inheritAttrs = false;
export default ForwardItemBold;