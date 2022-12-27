// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardOutlineSvg from '@ant-design/icons-svg/lib/asn/ForwardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardOutline: ForwardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardOutlineSvg}></AntdIcon>;
};

ForwardOutline.displayName = 'ForwardOutline';
ForwardOutline.inheritAttrs = false;
export default ForwardOutline;