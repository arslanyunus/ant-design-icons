// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickLinear: ClipboardTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickLinearSvg}></AntdIcon>;
};

ClipboardTickLinear.displayName = 'ClipboardTickLinear';
ClipboardTickLinear.inheritAttrs = false;
export default ClipboardTickLinear;