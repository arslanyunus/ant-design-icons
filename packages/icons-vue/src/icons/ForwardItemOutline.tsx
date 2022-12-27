// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItemOutlineSvg from '@ant-design/icons-svg/lib/asn/ForwardItemOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItemOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItemOutline: ForwardItemOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItemOutlineSvg}></AntdIcon>;
};

ForwardItemOutline.displayName = 'ForwardItemOutline';
ForwardItemOutline.inheritAttrs = false;
export default ForwardItemOutline;