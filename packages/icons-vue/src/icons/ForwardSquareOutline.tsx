// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ForwardSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardSquareOutline: ForwardSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardSquareOutlineSvg}></AntdIcon>;
};

ForwardSquareOutline.displayName = 'ForwardSquareOutline';
ForwardSquareOutline.inheritAttrs = false;
export default ForwardSquareOutline;